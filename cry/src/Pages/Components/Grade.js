import { TextField } from '@mui/material';
import React, { Component } from 'react'

//Needs to figure out how to save the inputs and comminucate to the database. (Form?)
/* Grade Page
 * Function: To help the user place their judging score bases on the follow criteria. Once the user clicks the
 * next button this information will be saved into the database for further evaluation.
 */

export class Grade extends Component {
  continue = e => {
    e.preventDefault();
    if(this.props.values.organization != null &&
      this.props.values.actractiveness != null &&
      this.props.values.legibility != null){
        this.props.nextStep();
    }else{
      alert("Invalid Entries")
    }
  };

  overScore = min => max => e => {
    var value = parseInt(e.target.value, 20);
    if (value > max) value = max;
    if (value < min) value = min;
  }

  render() {
    const {values, handleChange} = this.props;
    const maxOrganization = 20;
    const minOrganization = 0;
    const maxAttractiveness = 10;
    const minAttractiveness = 0;
    const maxLegibility = 5;
    const minLegibility = 0;
    
  return (
    <div class="criteria">
      <header><u>Presentation</u></header>
      <div id="help-tip">
        <p>Add description of each criteria here. Orgainzation, Attractiveness, Legibility<br /></p>
      </div>
     
      <div id="organization">
        <br/>
          <label>Organization (0-20)</label>
        <br/>
        <TextField
          type = "number"
          inputProps = {{min: minOrganization, max: maxOrganization}}
          placeholder = "Enter Score"
          value = {values.organization}
          onChange = {handleChange("organization")}
        ></TextField>
        {console.log(values.organization)}
      </div>
      
      <div id="attractiveness">
        <label>Attractiveness (0-10)</label>
        <br />
        <TextField 
          type = "number"
          inputProps={{min: minAttractiveness, max: maxAttractiveness}}
          placeholder = "Enter Score"
          value = {values.actractiveness}
          onChange = {handleChange("actractiveness")}
        ></TextField>
        {console.log(values.actractiveness)}
      </div>
      
      <div>
        <label>Legibility (0-5)</label>
        <br />
        <TextField 
          type = "number"
          inputProps={{min: minLegibility, max: maxLegibility}}
          placeholder = "Enter Score"
          value = {values.legibility}
          onChange = {handleChange("legibility")}
        ></TextField>
        {console.log(values.legibility)}
      </div>
     
      <button
        class="buttonSmall"
        onClick = {this.continue}
      >Next</button>
    </div>
  )
  }
}

export default Grade
