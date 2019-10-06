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
        isDone: true,
        id: 1
      },
      {
        value: 'Проверить проект',
        isDone: false,
        id:2
      },
      {
        value: 'Поучить английский',
        isDone: true,
        id:3
      }
    ]
  };
  
  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    this.setState({ items: newItemList });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Планируй свой день!</h3>
        <InputItem />
        <ItemList 
          items={this.state.items} 
          onClickDone={this.onClickDone}
        />
        <Footer count={3} />
      </div>)
  }
};

export default App;