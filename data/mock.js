import { WishListItem, WishList } from "../models/WishList";

export const getWishList = () => WishList.create({
  items: [
    {
      id:1,
      name: "LEGO Mindstorms EV3",
      price: 349.95,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg",
    },
    {
      id:2,
      name: "Miracles - C.S. Lewis",
      price: 12.91,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg",
    },
  ],
});