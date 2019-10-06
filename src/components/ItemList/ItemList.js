import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({items, onClickDone}) => (
  <ul className={styles.itemList}>
    {items.map(item => {
      const id=item.id
      return <li 
              key={item.value} 
              className={styles.item} 
              onClick={() => onClickDone(id)}
             >
        <Checkbox
          checked={item.isDone}
          color='default'
        />
        <div className={styles.itemText}><Item value={item.value} isDone={item.isDone} /></div>
        <div>
          <IconButton aria-label='delete'>
              <DeleteIcon fontSize='small' />
          </IconButton>
        </div>
      </li>
    })}
  </ul>
);

export default ItemList;

