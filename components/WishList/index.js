import React, { useEffect, useMemo } from 'react';
import { List } from 'antd';
import { observer } from 'mobx-react';
import WishListItem from './Item';
import { toJS } from 'mobx';

// cant make observable work properly without cloning / using toJS in Ant Design. Had to use an ID to update =/
const WishList = (props) => {
  const { readonly } = props;
  let { items } = props.wishlist;
  const getItem = (id) => items.filter((i) => i.id === id)[0];
  const onChangePrice = (id, newPrice) => {
    getItem(id).changePrice(newPrice);
  };
  const onChangeName = (id, newName) => {
    getItem(id).changeName(newName);
  };
  const onDelete = (id) => {
    getItem(id).delete();
  };


  return (
    <List
      {...props}
      itemLayout='horizontal'
      dataSource={toJS(items)}
      renderItem={(item) => (
        <WishListItem
          item={item}
          onDelete={onDelete}
          onChangePrice={onChangePrice}
          onChangeName={onChangeName}
          readonly={readonly}
        />
      )}
    />
  );
};

export default observer(WishList);
