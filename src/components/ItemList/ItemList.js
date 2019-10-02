import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Проверить проект'}/></li>
    <li><Item todoItem={'Поучить английский'}/></li>
  </ul>);

export default ItemList;