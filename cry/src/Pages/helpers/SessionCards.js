import React, { Component } from 'react'
import Presentation from './Presentation'
import {Link } from "react-router-dom";

let pres1 = new Presentation("RMS008","Test Title 1", "Test Presenter Name 1", "9:50 AM","TBD","TBD","sesh");
let pres2 = new Presentation("RMS046","Test Tile 2", "Test Presenter Name 2", "10:35AM","TBD","TBD", "sessiones");
let pres3 = new Presentation("RMS079","Test Title 3", "Test Presenter Name 3", "10:35 AM","TBD","TBD", "session");
let myarray = [pres1, pres2, pres3];

class SessionCards extends React.Component{
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
            <Link to = "/Presentations">
            <button class="button" id={data.session} onClick={this.handleClick}>
                {data.session}
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
export default SessionCards