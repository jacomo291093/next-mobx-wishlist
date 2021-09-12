import { List, Avatar } from "antd";
import React from "react";

const WishList = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.image && <Avatar src={item.image} />}
          title={item.name}
          description={`Price: ${item.price}`}
        />
      </List.Item>
    )}
  />
);

export default WishList;