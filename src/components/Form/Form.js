import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    from: '',
    to: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render() {
    const { from, to } = this.state;
    return <form className="form" onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(from, to);
        }}>
        <fieldset>
          <label>From:</label>
          <input defaultValue="" type="text" placeholder="#AABBCC" name="from" value={from} onChange={this.handleChange} />
          <label>To:</label>
          <input defaultValue="" type="text" placeholder="#AABBCC" name="to" value={to} onChange={this.handleChange} />
          <input type="submit" className="block" />
        </fieldset>
      </form>;
  }
}

export default Form;
