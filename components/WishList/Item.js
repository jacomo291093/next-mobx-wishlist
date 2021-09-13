import React, { useState } from 'react'
import { List, Avatar, Button, Input } from 'antd';
import { SaveOutlined, EditOutlined,DeleteOutlined } from '@ant-design/icons';

export const WishListItemShow = ({ item, toggleCallback, onDelete }) => (
  <>
    <List.Item.Meta
      avatar={item.image && <Avatar src={item.image} />}
      title={item.name}
      description={`Price: ${item.price}`}
    />
    <span>
      <Button
        type='secondary'
        icon={<EditOutlined />}
        size={'small'}
        onClick={() => toggleCallback()}
      />
      <Button
        type='secondary'
        icon={<DeleteOutlined />}
        size={'small'}
        onClick={() => onDelete(item.id)}
      />
    </span>
  </>
);

export const WishListItemEdit = ({ item, toggleCallback, onChangePrice, onChangeName }) => (
  <>
    <List.Item.Meta
      title={
        <Input
          addonBefore='Name: '
          value={item.name}
          size='small'
          onChange={(e) => {
            onChangeName(item.id, e.target.value);
          }}
        />
      }
      description={
        <Input addonBefore='Price: '
        value={item.price}
        size="small"
        onChange={(e) => {
          const price = parseInt(e.target.value);
          if(!isNaN(price)) onChangePrice(item.id, price)
        }}/>
      }
    />
    <span>
      <Button type='secondary' icon={<SaveOutlined />} size={'small'} onClick={toggleCallback} />
    </span>
  </>
);

const WishListItem = ({ item, onChangePrice, onChangeName, onDelete }) => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <List.Item>
        {!edit ? (
          <WishListItemShow item={item} toggleCallback={() => setEdit(true)} onDelete={onDelete} />
        ) : (
          <WishListItemEdit item={item} onChangeName={onChangeName} onChangePrice={onChangePrice} toggleCallback={() => setEdit(false)} />
        )}
      </List.Item>
    </>
  );
};

export default WishListItem;