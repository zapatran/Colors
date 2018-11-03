import React, { Component } from 'react';
import Card from '../Card/Card';

import './CardList.css'

class CardList extends Component {
  render () {
    const { data } = this.props;

    return (
      <div className="wrapper">
        { data.map((element, index) => <Card key={`${index}-${element[0]}`} from={element[0]} to={element[1]} /> )}
      </div>
    )
  }
}

export default CardList;