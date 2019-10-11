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
    ],
    count: 3
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

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => {
      const newItem = { ...item };

      if (item.id !== id) {
        return newItem;
      };
    });

    this.setState({ items: newItemList });
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Планируй свой день!</h3>
        <InputItem onClickAdd={this.onClickAdd}/>
        <ItemList 
          items={this.state.items} 
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer count={this.state.count} />
      </div>)
  }
};

export default App;