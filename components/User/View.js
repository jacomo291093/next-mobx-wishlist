import React from 'react';
import { Typography, Divider } from 'antd';
import { observer } from 'mobx-react';
const { Title } = Typography;
import WishList from '../WishList';

const UserView = ({ user }) => {
  if(!user.recipient) return null;
  return (
    <>
      <Title type='secondary' level={3}>
        User: {user.recipient.name}
      </Title>  
      <WishList style={{ width: '300px' }} wishlist={user.recipient.wishlist} readonly />
    </>
  );
}

export default observer(UserView);
