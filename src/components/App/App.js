import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    {
      value: 'Выполнить задание в курсе WHS'
    },
    {
      value: 'Проверить проект'
    },
    {
      value: 'Поучить английский'
    }
  ]
  
  
  return (<div className='wrap'>
  <h3 className='wrap__title'>Важные дела:</h3>
  <InputItem />
  <ItemList items={items} />
  <Footer count={3} />
  </div>)
  };

export default App;