import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Выполнить задание в курсе WHS';

const App = () => (<div>
  <h3>Важные дела:</h3>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={7} />
  </div>);

export default App;