import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    items: [
      {
        value: 'Выполнить задание в курсе WHS',
        isDone: true
      },
      {
        value: 'Проверить проект',
        isDone: false
      },
      {
        value: 'Поучить английский',
        isDone: true
      }
    ]
  };
  
  onClickDone = isDone => console.log(isDone)

  render() {
    
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Планируй свой день!</h3>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={3} />
      </div>)
  }
};

export default App;