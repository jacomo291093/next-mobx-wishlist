import React, { useEffect, useState, useMemo } from 'react';
import { Typography, Select, Button, Divider } from 'antd';
const { Option } = Select;
const { Title } = Typography;
import WishListView from '../components/WishList/View';
import UserView from '../components/User/View';
import { getGroup, getWishList } from '../data/mock';
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

  const groups = useMemo(() => {
    const g = getGroup();
    g.load()
    return g;
  }, []);
  const [user, setUser] = useState(null);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1' }}>
          <Select
            style={{ width: '324px', marginBottom: '2rem' }}
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
          {user && <WishListView user={user} />}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: '1' }}>
        <Button
            style={{ width: '324px', marginBottom: '1rem' }}
            type='primary'
            onClick={() => {
              groups.reload();
            }}>
            {' '}
            Reload{' '}
          </Button>
          <Button
            style={{ width: '324px', marginBottom: '2rem' }}
            type='primary'
            onClick={() => {
              groups.drawLots();
            }}>
            {' '}
            Draw Lots{' '}
          </Button>
          {user && <UserView user={user} />}
        </div>
      </div>
    </>
  );
}
