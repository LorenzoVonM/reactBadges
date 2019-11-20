import React from 'react';

class BadgeForm extends React.Component {

  state = {
    //jobTitle: 'Designer'
  };

  handleChange = e => {
    // console.log({
    //   value: e.target.value,
    //   name: e.target.name})

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <React.Fragment>
        <h1>NEW ATTENDANT</h1>
        <form onSubmit={this.props.onSubmit}>

          <div className='form-group'>
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type="text" 
              name="firstName" 
              id="" 
              value={this.props.formValues.firstName}/>
          </div>

          <div className='form-group'>
            <label>Last Name</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type="text" 
              name="lastName" 
              id="" 
              value={this.props.formValues.lastNameame}/>
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input 
            onChange={this.props.onChange} 
            className='form-control' 
            type="email" 
            name="email" 
            id="" 
            value={this.props.formValues.email}/>
          </div>

          <div className='form-group'>
            <label>Job title</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type="text" 
              name="jobTitle" 
              id="" 
              value={this.props.formValues.jobTitle}/>
          </div>

          <div className='form-group'>
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className='form-control' 
              type="text" 
              name="twitter" 
              id="" 
              value={this.props.formValues.twitter}/>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </React.Fragment>
    )
  }
}

export default BadgeForm;