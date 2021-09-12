import MasterPage from "../components/MasterPage";
import "../styles/globals.css";
import "antd/dist/antd.css";

import { WishList, WishListItem } from "../models/WishList";

const wishList = WishList.create({
  items: [
    WishListItem.create({
      name: "LEGO Mindstorms EV3",
      price: 349.95,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg",
    }),
    WishListItem.create({
      name: "Miracles - C.S. Lewis",
      price: 12.91,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg",
    }),
  ],
});

function MyApp({ Component, pageProps }) { 
  return (
    <MasterPage>
      <Component {...pageProps} wishlist={wishList} />
    </MasterPage>
  );
}

export default MyApp;
