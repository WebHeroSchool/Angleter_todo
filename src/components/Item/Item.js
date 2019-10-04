import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ( {value, isDone} ) => (<span className={
    classnames ({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <span>{value}</span>
    <span>
    <IconButton aria-label='delete'>
        <DeleteIcon fontSize='small' />
    </IconButton>
    </span>
</span>

)

export default Item;