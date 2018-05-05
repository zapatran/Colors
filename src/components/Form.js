import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault();
      props.manejarSubmit(this._from.value, this._to.value);
    }}>
      <fieldset>
        <label>From:</label>
        <input 
          defaultValue=''
          type="text"
          placeholder="#AABBCC"
          ref={ input => this._from = input }
        />
        <label>To:</label>
        <input 
          defaultValue=''
          type="text"
          placeholder="#AABBCC"
          ref={ input => this._to = input }
        />
        <input type="submit" className="block" />
      </fieldset>
    </form>
  )
}

export default Form;
