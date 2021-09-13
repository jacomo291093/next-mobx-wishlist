import { WishListItem, WishList } from '../models/WishList';
import { Group } from '../models/Users';

export const getWishList = (user) => {
  return WishList.create({
    items: [
      {
        id: 1,
        name: 'LEGO Mindstorms EV3',
        price: 349.95,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg',
      },
      {
        id: 2,
        name: 'Miracles - C.S. Lewis',
        price: 12.91,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg',
      },
    ],
  });
};

export const getGroup = () => {
  return Group.create({
    users: {
      1: {
        id: 1,
        name: 'José',
        gender: 'm',
        wishlist: {
          items: [
            {
              id: 1,
              name: 'LEGO Mindstorms EV3',
              price: 349.95,
              image: 'https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg',
            },
            {
              id: 2,
              name: 'Miracles - C.S. Lewis',
              price: 12.91,
              image:
                'https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg',
            },
          ],
        },
      },
      2:{
        id:2,
        name:"Zerado",
        gender:"m",
      }
    },
  });
};
