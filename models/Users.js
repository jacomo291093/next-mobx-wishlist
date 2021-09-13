import {
  types,
  getParent,
  destroy,
  flow,
  applySnapshot,
  getSnapshot,
  onSnapshot,
} from 'mobx-state-tree';
import { WishList } from './WishList';
import { values, get } from 'mobx';

const url = 'http://localhost:3000';

export const User = types
  .model({
    id: types.identifierNumber,
    name: types.string,
    gender: types.enumeration('gender', ['m', 'f']),
    wishlist: types.optional(WishList, { items: [] }),
    recipient: types.maybe(types.reference(types.late(() => User))),
  })
  .actions((self) => ({
    getSuggestions: flow(function* () {
      const response = yield fetch(`${url}/api/suggestions/${self.gender}`);
      const suggestions = yield response.json();
      self.wishlist.items.push(...suggestions);
    }),
    save: flow(function* () {
      try {
        yield fetch(`${url}/api/users/${self.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(getSnapshot(self)),
        });
      } catch (e) {
        console.log('save failed');
      }
    }),
    afterCreate() {
      onSnapshot(self, self.save);
    },
  }));

export const Group = types
  .model({
    users: types.map(User),
  })
  .actions((self) => {
    let controller;
    return {
      afterCreate() {
        self.load();
      },
      load: flow(function* () {
        //Abort controller Nextjs ? 
        //controller = window.AbortController && new window.AbortController();
        try {
          const response = yield fetch(`${url}/api/users`, {
            signal: controller && controller.signal,
          });
          const json = yield response.json();
          applySnapshot(self.users, json);
          console.log('success');
        } catch (e) {
          console.log(e.name);
        }
      }),
      reload() {
        if (controller) controller.abort();
        self.load();
      },
      beforeDestroy() {
        if (controller) controller.abort();
      },
      drawLots: (_) => {
        const allUsers = Array.from(values(self.users));

        // not enough users, bail out
        if (allUsers.length <= 1) return;
        // not assigned lots
        let remaining = allUsers.slice();
        allUsers.forEach((user) => {
          // edge case: the only person without recipient
          // is the same as the only remaining lot
          // swap lot's with some random other person
          if (remaining.length === 1 && remaining[0] === user) {
            const swapWith = allUsers[Math.floor(Math.random() * (allUsers.length - 1))];
            user.recipients = swapWith.recipient;
            swapWith.recipient = self;
          } else
            while (!user.recipient) {
              // Pick random lot from remaing list
              let recipientIdx = Math.floor(Math.random() * remaining.length);

              // If it is not the current user, assign it as recipient
              // and remove the lot
              if (remaining[recipientIdx] !== user) {
                user.recipient = remaining[recipientIdx];
                remaining.splice(recipientIdx, 1);
              }
            }
        });
      },
    };
  });
