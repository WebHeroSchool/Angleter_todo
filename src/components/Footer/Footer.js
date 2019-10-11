import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { style } from '@material-ui/system';

const Footer = ({ count }) => (<footer className={styles.wrap}>
    <div className={styles.leftToDo}>Осталось задач к исполнению: {count}</div>
    <div>
        <ButtonGroup variant='text' size='small' aria-label='small contained button group'>
            <Button>Все</Button>
            <Button>В работе</Button>
            <Button>Выполненные</Button>
        </ButtonGroup>
    </div>
    <div>
        <Button
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon />}>
            Удалить выполненные задачи
        </Button>
    </div>
</footer>)

Footer.defaultProps = {
    count: 0
};

export default Footer;