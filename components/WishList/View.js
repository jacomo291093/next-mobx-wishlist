import React from 'react';
import { Typography, Divider, Card, Select, Button } from 'antd';
const { Title } = Typography;
import { PlusSquareTwoTone } from '@ant-design/icons';
import WishListNew from './New';
import WishList from './index';

const WishListView = ({ user }) => {
  return (
    <>
      <Card
        size='small'
        title={
          <>
            <PlusSquareTwoTone /> Add Wish
          </>
        }
        bordered={false}
        style={{ width: 'fit-content', marginBottom: '1rem' }}>
        <WishListNew wishlist={user.wishlist} />
      </Card>
      <Button
        style={{ width: '324px', marginBottom: '1rem' }}
        type='primary'
        onClick={user.getSuggestions}>
        Get Suggestions
      </Button>
      <Title type='secondary' level={3}>
        WishList
      </Title>
      <Divider />
      <WishList style={{ width: '300px' }} wishlist={user.wishlist} />
    </>
  );
};

export default WishListView;
