import React, { useEffect, useState } from 'react';
import WishList from '../components/WishList';
import WishListNew from '../components/WishList/New';
import { Typography, Divider } from 'antd';
const { Title } = Typography;

import { getWishList } from '../data/mock';
import { onSnapshot } from 'mobx-state-tree';
import { WishList as WishListModel } from '../models/WishList';

export default function Home() {
  const [wishlist, setWishlist] = useState(getWishList());
  useEffect(() => {
    const ls = localStorage.getItem('wishlist');
    const parsed = JSON.parse(ls);
    if (ls && WishListModel.is(parsed)) setWishlist(WishListModel.create(parsed));
  }, []);

  onSnapshot(wishlist, (snapshot) => {
    localStorage.setItem('wishlist', JSON.stringify(snapshot));
  });

  return (
    <>
      <Title type='secondary' level={3}>
        Adicionar Desejo
      </Title>
      <Divider />
      <WishListNew wishlist={wishlist} />
      <Title type='secondary' level={2}>
        Lista de Desejos
      </Title>
      <Divider />
      <WishList style={{ width: '300px' }} wishlist={wishlist} />
    </>
  );
}
