import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        if (this.state.inputValue) {
        this.setState({
            inputValue: ''
        });
        this.props.onClickAdd(this.state.inputValue);}
    }

    render () {
        const { onClickAdd } = this.props;
    
        return (<div className={styles.wrap}>
            <TextField 
                id='outlined-name'
                label='Новая задача'
                margin='normal'
                variant='outlined'
                value={this.state.inputValue}
                onChange={event => this.setState({inputValue: event.target.value })}
            />
            <Button 
                variant='contained'
                onClick={this.onButtonClick}
            >
                добавить в список
            </Button>
        </div>);
    }
}

export default InputItem;