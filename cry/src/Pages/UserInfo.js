import React, { Component } from 'react'

function userInfo() {
  return (
    <div>
      userInfo
      <SimpleForm />
    </div>
    
  )
}

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the DOM element
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.company = React.createRef();
    this.phone = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.firstName.current.value == '' || this.lastName.current.value == '' || this.phone.current.value == '') {
      alert("Must enter at least first name, last name, and phone before submitting.");
    }
    else {
      alert(this.firstName.current.value + this.lastName.current.value + " " + this.company.current.value + " " + this.phone.current.value);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>First Name: 
          <input type="text" ref={this.firstName} />
        </label>
        <br></br>
        <label>Last Name: 
          <input type="text" ref={this.lastName} />
        </label>
        <br></br>
        <label>Company: 
          <input type="text" ref={this.company} />
        </label>
        <br></br>
        <label>Phone Number: 
          <input type="text" ref={this.phone} />
        </label>
        <br></br>
        <div className="button">
          <input type="submit" name="Submit" />
        </div>
      </form>
    )
  }
}

export default userInfo