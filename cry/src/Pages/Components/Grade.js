import { TextField } from '@mui/material';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Needs to figure out how to save the inputs and comminucate to the database. (Form?)
/* Grade Page
 * Function: To help the user place their judging score bases on the follow criteria. Once the user clicks the
 * next button this information will be saved into the database for further evaluation.
 */

export class Grade extends Component {
  continue = e => {
    e.preventDefault();
    if((this.props.values.organization !== null && this.props.values.organization !== '') &&
      (this.props.values.actractiveness !== null && this.props.values.actractiveness !== '') &&
      (this.props.values.legibility !== null && this.props.values.legibility !== '')){
        this.props.nextStep();
    }else{
      let message = ''
      if(this.props.values.organization === '' || this.props.values.organization === null){
        document.getElementById("organizationField").setAttribute("error", "Score Required");
        //noEntry.setAttribute("helperText", "Score Required")
        message += "Score Required: Orgranization\n";
      }
      if(this.props.values.actractiveness === '' || this.props.values.actractiveness === null){
        message += "Score Required: Actractiveness\n"
      }
      if(this.props.values.legibility === '' || this.props.values.legibility === null){
        message += "Score Required: Legibility"
      }
      alert(message)
    }
  };

  validate = input => {
    let invalidEntry = "";
    invalidEntry = this.props.values[input]!= null ? "" : "Invaild Score";
    return invalidEntry;
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
        <p> Organization: Is the presentation organized in a coherent fashion? Attractiveness: Are the colors appealing? Legibility: Is the font easy to read?<br /></p>
      </div>
     
      <div id="organization">
        <br/>
          <label>Organization (0-20)</label>
        <br/>
        <TextField
          id = "organizationField"
          type = "number"
          inputProps = {{min: minOrganization, max: maxOrganization}}
          placeholder = "Enter Score"
          value = {values.organization}
          onChange = {handleChange("organization")}
          error = {this.validate("organization")}
          helperText = {this.validate("organization")}
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
          error = {this.validate("actractiveness")}
          helperText = {this.validate("actractiveness")}
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
          error = {this.validate("legibility")}
          helperText = {this.validate("legibility")}
        ></TextField>
        {console.log(values.legibility)}
      </div>
     
      <button
        class="buttonSmall"
        onClick = {this.continue}
      >Next</button>
      <br></br>
      <Link to={`/Presentations/${this.props.time}/${this.props.session}`}>
        <button class="buttonSmall">
          Return to Presentation List
        </button>
      </Link>
    </div>
  )
  }
}

export default Grade
