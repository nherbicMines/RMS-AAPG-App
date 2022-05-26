import React, { Component } from 'react'
//import Presentation from './helpers/Presentation' 

function OralPresentations() {
  return (
    <div>
      Presentation Form
      <PresentationForm />
    </div>
  )
}

class Presentation{
  constructor(title, presenterName, time){
    this.title = title;
    this.presenterName = presenterName;
    this.time = time;
  }
}

let pres1 = new Presentation("Suck my dick", "You're mom", "12:00 PM");
let pres2 = new Presentation("Oh god", "some guy", "12:00 PM");
let pres3 = new Presentation("Pizza time", "I.C weiner", "12:00 PM");
let myarray = [pres1, pres2, pres3];





class PresentationForm extends React.Component{
  
  /*constructor(props) {
    super(props);
    //create ref to store selection
    this.presentation = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.presentation.current.value === ""){
      alert("Must pick a presentation");
    }
    else{
      alert(this.presentation.current.value);
    }
  }*/
  makeButton(data) {
    return (
        <button class="button">
          {data.title}
        </button>
    );
  }
  render(){
    return (
      <div>
        {myarray.map(this.makeButton,this)}
      </div>
    )
  }

}

export default OralPresentations

