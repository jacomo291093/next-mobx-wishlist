import React, { useEffect, useState, useMemo } from 'react';
import WishList from '../components/WishList';
import WishListNew from '../components/WishList/New';
import { Typography, Divider, Card, Select } from 'antd';
const { Title } = Typography;
const { Option } = Select;
import { PlusSquareTwoTone } from '@ant-design/icons';

import { getGroup, getWishList } from '../data/mock';
import { onSnapshot } from 'mobx-state-tree';
import { WishList as WishListModel } from '../models/WishList';
import { values, get } from 'mobx';

export default function Home() {
  //localhost implementation
  //const [wishlist, setWishlist] = useState(getWishList());
  // useEffect(() => {
  //   const ls = localStorage.getItem('wishlist');
  //   const parsed = JSON.parse(ls);
  //   if (ls && WishListModel.is(parsed)) setWishlist(WishListModel.create(parsed));
  // }, []);

  // onSnapshot(wishlist, (snapshot) => {
  //   localStorage.setItem('wishlist', JSON.stringify(snapshot));
  // });

  const groups = useMemo(() => getGroup(), []);
  const [user, setUser] = useState(null);
  return (
    <>
      <Select
        style={{ width: "300px", marginBottom: "2rem"}}
        onChange={(v) => {
          setUser(get(groups.users, parseInt(v)));
        }}
        placeholder='Select User'>
        {values(groups.users).map((us, idx) => (
          <Option key={idx} value={us.id}>
            {us.name}
          </Option>
        ))}
      </Select>
      {user && (
        <>
          <Card
            size='small'
            title={
              <>
                <PlusSquareTwoTone /> Add Wish
              </>
            }
            bordered={false}
            style={{ width: 'fit-content', marginBottom: '2rem' }}>
            <WishListNew wishlist={user.wishlist} />
          </Card>
          <Title type='secondary' level={2}>
            WishList
          </Title>
          <Divider />
          <WishList style={{ width: '300px' }} wishlist={user.wishlist} />
        </>
      )}
    </>
  );
}
