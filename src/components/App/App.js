import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
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
  
  
  return (<div className={styles.wrap}>
    <h3 className={styles.title}>Важные дела:</h3>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>)
  };

export default App;