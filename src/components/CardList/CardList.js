import React from 'react';
import Card from '../Card/Card';

import './CardList.css'

const CardList = (props) => {
  const { data } = props;
  return (
    <div className="wrapper">
      { data.map((element, index) => <Card key={`${index}-${element[0]}`} from={element[0]} to={element[1]} /> )}
    </div>
  );
}

export default CardList;