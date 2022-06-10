import React, { Component } from 'react'
import {Link, useLocation} from "react-router-dom";


//array with dummy data 
let myarray = ["session1", "session2", "session3"];

export default class SessionCards extends Component{
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
        return (
          <div>
            <Link to = {"/Presentations"}
              //send the email and session string to next page
              state = {{
                session: data
            }}> 
            <button class="button" id={data} onClick={this.handleClick}>
                {data}
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