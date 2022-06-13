import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material'
import { useCookies } from 'react-cookie'
import Axios from 'axios'

function UserInfo() {
  return (
    <div>
      <div class="bigText">
        Information!
      </div>
      <SimpleForm/>
    </div>
    
  )
}

function containsSpecialChars(str) {
  const specialChars = /[@]/;
  return specialChars.test(str);
}

class SimpleForm extends React.Component {
  
  constructor(props) {
    
    super(props);
    // create a ref to store the DOM element
    {/*this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.company = React.createRef();
    this.email = React.createRef();
  */}
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetCookie = this.handleSetCookie.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,         // valid flags for each field
      submitDisabled: true       // separate flag for submit
    }
  }

  handleSetCookie = () => {
    const [cookies, setCookie] = useCookies(['email']);
    setCookie('email', this.state.email, { path: '/' });
  }

  handleChangeFirstName(e) {         // separate handler for each field
    let firstNameValid = e.target.value ? true : false;        // basic firstName validation
    let submitValid = this.state.emailValid && this.state.lastNameValid && firstNameValid   // validate total form
    this.setState({
      firstName: e.target.value,
      firstNameValid: firstNameValid, 
      submitDisabled: !submitValid
    })
  }
  handleChangeLastName(e) {         // separate handler for each field
    let lastNameValid = e.target.value ? true : false;        // basic firstName validation
    let submitValid = this.state.emailValid && lastNameValid && this.state.firstNameValid   // validate total form
    this.setState({
      lastName: e.target.value,
      lastNameValid: lastNameValid, 
      submitDisabled: !submitValid
    })
  }
  handleChangeCompany(e) {
    this.setState({
      company: e.target.value
    })
  }
  handleChangeEmail(e) {         // separate handler for each field
    let emailValid = e.target.value ? true : false;        // basic email validation
    let containsAt = false;
    if(containsSpecialChars(e.target.value) == true){
      containsAt = true;
    }
    let submitValid = this.state.firstNameValid && this.state.lastNameValid && emailValid && containsAt   // validate total form
    
    this.setState({
      email: e.target.value,
      emailValid: emailValid, 
      submitDisabled: !submitValid
    })
   
    
  }

  handleSubmit(e) {
    this.handleSetCookie();
    Axios.post("http://localhost:3001/UserInfo", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company, 
      email: this.state.email})
  }

   

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        {/*this.getInitialState()*/}
        <label>
          <TextField name="firstName"
          label="First Name"
          margin="normal"
          placeholder="First name" 
          variant="standard" 
          defaultValue={this.state.firstName} 
          onChange={this.handleChangeFirstName} />
        </label>
        <br></br>
        <label>
          <TextField name="lastName"
          label="Last Name"
          margin="normal" 
          placeholder="Last name" 
          variant="standard" 
          defaultValue={this.state.lastName} 
          onChange={this.handleChangeLastName} />
        </label>
        <br></br>
        <label>
          <TextField name="company"
          label="Company"
          margin="normal" 
          placeholder="Company" 
          variant="standard"
          defaultValue={this.state.company}
          onChange={this.handleChangeCompany} />
        </label>
        <br></br>
        <label>
          <TextField name="email"
          label="Email"
          margin="normal" 
          placeholder="Email" 
          variant="standard" 
          defaultValue={this.state.email} 
          onChange={this.handleChangeEmail}/> 
        </label>
        <br></br>
        {this.state.submitDisabled ? (
          <button type="button" 
          disabled={this.state.submitDisabled}
          class="buttonSmall"
          >Submit</button>
        ) : (
        <Link 
          to={"/TimeSelection"}
          state={{
            email: this.state.email,
          }}
        >
          <button type="button" 
          onClick={this.handleSubmit}
          disabled={this.state.submitDisabled}
          class="buttonSmall"
          >Submit</button>
        </Link> 
        )}
      </form>
    )
  }
}

export default UserInfo