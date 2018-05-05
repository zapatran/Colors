import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import CardList from './components/CardList';

import { list } from './list';

class App extends Component {
  state = {
    data: list,
  }

  handleSubmit = (from, to) => {
    console.log('submit %s to %s', from, to);
    this.setState({
      data: [...this.state.data, [from, to]],
    })
  }

  render() { 
    const { data } = this.state;

    return (
      <div>
        <Form  manejarSubmit={this.handleSubmit} />
        <CardList data={data}/>
      </div>
    );
  }
}

export default App;
