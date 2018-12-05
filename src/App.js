import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

import { gradients } from './gradients';

class App extends Component {
  state = {
    data: gradients,
  }

  handleSubmit = (from, to) => {
    const { data } = this.state;
    data.push([from, to]);
    this.setState({
      data,
    })
  }

  render() { 
    const { data } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <CardList data={data}/>
      </div>
    );
  }
}

export default App;
