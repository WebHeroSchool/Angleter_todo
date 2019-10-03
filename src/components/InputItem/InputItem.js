import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField 
        id="outlined-name"
        label="Введите новое дело"
        margin="normal"
        variant="outlined"
    />
</div>);

export default InputItem;