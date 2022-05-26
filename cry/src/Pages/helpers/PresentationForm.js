import React, { Component } from 'react'
import Presentation from './Presentation'
import {Link } from "react-router-dom";

/*Here is where we would implement some code to grab the presentations from the DB*/

let pres1 = new Presentation("RMS101","Succa my pp", "You're mom", "12:00 PM","TBD","TBD");
let pres2 = new Presentation("RMS102","Oh god", "some guy", "12:00 PM","TBD","TBD");
let pres3 = new Presentation("RMS103","Pizza time", "I.C weiner", "12:00 PM","TBD","TBD");
let myarray = [pres1, pres2, pres3];

class PresentationForm extends React.Component{
  constructor(props) {
    super(props);
    //create ref to store selection
    this.handleClick = this.handleClick.bind(this);
  }

  //function that kinda saves info of the button you press
  handleClick(event){
    var id = event.target.id;
    alert(id);
  }

  //when we start interfacing with DB, get rid of title in id 
  /*
  - this function makes one instance of a button based on a presentation 
    instance as input. 
  - The id for each button is associated to the presentation's key from DB
  - each button will take the user to the judge form page after clicking */
  makeButton(data) {
    return (
        <Link to = "/JudgeForm">
          <button class="button" id={data.num+" "+data.title} onClick={this.handleClick}>
            {data.title} <br></br> {data.presenterName} <br></br> {data.time}
          </button>
        </Link>
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

export default PresentationForm