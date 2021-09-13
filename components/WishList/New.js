import React, { useState } from 'react';
import { WishListItemEdit } from './Item';
import { WishListItem as WishListItemModel } from '../../models/WishList';
import { List, notification } from 'antd';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const WishListNew = ({ wishlist }) => {
  const [item, setItem] = useState(WishListItemModel.create({ id: 10, name: '', price: 0 }));

  const onChangePrice = (id, newPrice) => {
    item.changePrice(newPrice);
  };

  const onChangeName = (id, newName) => {
    item.changeName(newName);
  };

  const onSave = () => {
    wishlist.add(item);
    setItem(WishListItemModel.create({ id: item.id + 1, name: '', price: 0 }));
    notification.success({
      message: 'Wish Added!',
      duration: 1,
      placement: 'topLeft'
    });
  };
  return (
    <div style={{width:"300px"}}>
      <List.Item>
        <WishListItemEdit
          item={toJS(item)}
          onChangePrice={onChangePrice}
          onChangeName={onChangeName}
          toggleCallback={onSave}
        />
      </List.Item>
    </div>
  );
};
export default observer(WishListNew);
