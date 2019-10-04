import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({items}) => (
  <ul className={styles.itemList}>
    {items.map(item => 
    <li key = {item.value}>
      <Checkbox
        defaultChecked
        color='default'
        value='checkedG'
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
      <Item value={item.value} isDone={item.isDone} />
    </li>)}
  </ul>
);

export default ItemList;