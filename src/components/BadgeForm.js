import React from 'react';
import './styles/Badges.css';

class BadgeForm extends React.Component {

  handleChange = e => {
    console.log({
      value: e.target.value,
      name: e.target.name})
  };

  handleClick = e => {
    console.log(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('for submitted');
  }

  render() {
    return(
      <div>
        <h1>NEW ATTENDANT</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input onChange={this.handleChange} className='form-control' type="text" name="firstName" id=""/>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;