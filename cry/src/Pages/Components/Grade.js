import React, { Component } from 'react'

//Needs to figure out how to save the inputs and comminucate to the database. (Form?)
/* Grade Page
 * Function: To help the user place their judging score bases on the follow criteria. Once the user clicks the
 * next button this information will be saved into the database for further evaluation.
 */

export class Grade extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values, handleChange} = this.props;

  return (
    <div>
      <hedaer>Presentation</hedaer>

      <br />

      <label>Orgainzation (0-20)</label>

      <br />

      <input
        type = "number"
        min = "0"
        max = "20"
        placeholder = "Enter Score"
        value = {values.organization}
        onChange = {handleChange("organization")}
      ></input>

      <br />

      <label>Attractiveness (0-10)</label>

      <br />

      <input 
        type = "number"
        min = "0"
        max = "10"
        placeholder = "Enter Score"
        value = {values.actractiveness}
        onChange = {handleChange("actractiveness")}
      ></input>

      <br />

      <label>Legibility (0-5)</label>

      <br />

      <input 
        type = "number"
        min = "0"
        max = "5"
        placeholder = "Enter Score"
        value = {values.legibility}
        onChange = {handleChange("legibility")}
      ></input>

      <br />

      <button
        class="buttonSmall"
        onClick = {this.continue}
      >Next</button>
    </div>
  )
  }
}

export default Grade
