import React, { Component } from 'react'
import Presentation from './helpers/Presentation' 

function OralPresentations() {
  return (
    <div>
      Presentation Form
      <PresentationForm />
    </div>
  )
}


let pres1 = new Presentation("Suck my dick", "You're mom", "12:00 PM");
let pres2 = new Presentation("Oh god", "some guy", "12:00 PM");
let pres3 = new Presentation("Pizza time", "I.C weiner", "12:00 PM");
let myarray = [pres1, pres2, pres3];





class PresentationForm extends React.Component{
  makeButton(data) {
    return (
        <button class="button">
          {data.title} <br></br> {data.presenterName} <br></br> {data.time}
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

