import React from 'react';
import './itemsListItem.css';

export const ItemsListItem = ({ item }) => {
  const { title, user,  } = item;
  return (
    <>
      <i className="fa fa-key list__item-icon"> </i><span className="list__item-title">{title}</span>
      <span className="list__item-descr thin">{user}</span>
    </>
  )
};
