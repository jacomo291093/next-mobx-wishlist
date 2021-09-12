import React from "react";
import WishList from "../components/WishList";

import { Typography } from "antd";
const { Title } = Typography;

export default function Home({ wishlist }) {
  //console.log(wishlist);
  return (
    <>
      <Title level={2}>Lista de Desejos</Title>
      
      {/* <WishList data={wishlist} /> */}
    </>
  );
}
