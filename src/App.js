import React, { Component } from 'react';
import Form from './components/Form/Form';
import CardList from './components/CardList/CardList';

import { gradients } from './gradients';

class App extends Component {
  state = {
    data: gradients,
  }

  handleSubmit = (from, to) => {
    this.setState({
      data: [...this.state.data, [from, to]],
    })
  }

  render() { 
    const { data } = this.state;
    return (
      <div>
        <Form  onSubmit={this.handleSubmit} />
        <CardList data={data}/>
      </div>
    );
  }
}

export default App;
