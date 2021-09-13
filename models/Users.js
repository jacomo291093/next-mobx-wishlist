import { types, getParent, destroy } from 'mobx-state-tree';
import { WishList } from './WishList';

export const User = types.model({
  id: types.identifierNumber,
  name: types.string,
  gender: types.enumeration("gender", ["m", "f"]),
  wishlist: types.optional(WishList, {items:[]}),
});

export const Group = types.model({
  users: types.map(User),
});
