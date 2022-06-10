import React, { Component } from 'react'
import Presentation from './Presentation'
import {Link } from "react-router-dom";

/*Here is where we would implement some code to grab the presentations from the DB*/
let pres1 = new Presentation("RMS008","Test Title 1", "Test Presenter Name 1", "9:50 AM", "sesh");
let pres2 = new Presentation("RMS046","Test Tile 2", "Test Presenter Name 2", "10:35AM", "sessiones");
let pres3 = new Presentation("RMS079","Test Title 3", "Test Presenter Name 3", "10:35 AM", "session");
let myarray = [pres1, pres2, pres3];

export default class PresentationForm extends Component{
  constructor(props) {
    super(props);
    //create ref to store selection
    this.handleClick = this.handleClick.bind(this);
  }

  //function that kinda saves info of the button you press
  handleClick(event){
    var id = event.target.id;

  }

  //when we start interfacing with DB, get rid of title in id 
  /*
  - this function makes one instance of a button based on a presentation 
    instance as input. 
  - The id for each button is associated to the presentation's key from DB
  - each button will take the user to the judge form page after clicking */
  makeButton(data) {
    const email = this.props.email;
    return (
      <div>
        <Link to = {"/JudgeForm"}
          state = {{
            email: email,
            presentationNum: data.num
        }}>
          <button class="button" id={data.num+" "+data.title} onClick={this.handleClick}>
            <b>Title:</b>
            <br></br>
            {data.title}
            <br></br> 
            <b>Presenter(s):</b>
            <br></br>
            {data.presenterName}
            <br></br>
            <b>Time:</b>
            <br></br>
            {data.time}
          </button>
        </Link>
      </div>
    );
  }

  /*This returns the array input when we map make button onto each instance */
  render(){
    return (
      <div>
        {myarray.map(this.makeButton,this)}
      </div>
    )
  }
}