import React from 'react';
//const myElement = (<button>Press me!</button>);

const ItemList = () => (<ul>
  <li>Первый</li>
  <li>Второй</li>
  <li>Третий</li>
</ul>);

const App = () => (<div>
  <h3>Мой первый заголовок списка</h3>
  <ItemList />
  </div>);
//export { myElement };
export default App;