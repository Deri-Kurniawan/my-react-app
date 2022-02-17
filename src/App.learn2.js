import React, { Component } from 'react';
import './App.css';
import List from './List.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoItem: '',
      items: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: '',
    });
    console.log('terpanggil');
    console.log(this.state.items);
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });

    console.log(this.state.todoItem);
  } 

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    )
  }
}

export default App;