import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  render() {
    const { from, to } = this.props;
    const cardGradient = {
      'height': '160px',
      'width': '170px',
      'borderRadius': '12px 12px 0px 0px',
      'backgroundImage': `linear-gradient(135deg, ${from} 10%, ${to} 100%)`,
    }

    const colorTo = {
      'color': `${to}`,
    }

    return ( 
      <div className="card">
        <div style={cardGradient}>
        </div>
        <div className="card-description">
          <div className="card-color-from">{from}</div>
          <div className="card-color-to" style={colorTo}>{to}</div>
        </div>
      </div>
    )
  }
}

export default Card;
