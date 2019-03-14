import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';
import { generateColorHex } from './helper';
import { gradients } from './gradients';

class App extends Component {
  state = {
    data: gradients,
  }

  handleSubmit = (from, to) => {
    const { data } = this.state;
    data.push([generateColorHex(), generateColorHex()]);
    this.setState({
      data,
    })
  }

  render() { 
    const { data } = this.state;
    return (
      <div>
        {/* <Form onSubmit={this.handleSubmit} /> */}
        <button className="block" onClick={this.handleSubmit}>add</button>
        <CardList data={data}/>
      </div>
    );
  }
}

export default App;
