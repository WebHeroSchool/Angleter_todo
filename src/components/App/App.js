import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

//const todoItem = 'Выполнить задание в курсе WHS';

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
  
  
  return (<div>
  <h3>Важные дела:</h3>
  <InputItem />
  <ItemList items={items} />
  <Footer count={3} />
  </div>)
  };

export default App;