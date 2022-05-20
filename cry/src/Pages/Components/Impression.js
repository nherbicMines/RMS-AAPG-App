import React, { Component } from 'react'
/* Impression Page
 * Function: To help the judging score based on the follow criteria. The user will be able to navigate to the previous
 * and next page. Then this information will be saved into the database.
 */
export class Impression extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleChange} = this.props;
    return (
      <div>
        <header>Overall Impression</header>

        <br />

        <label>1-5 (5 = Excellent)</label>

        <br />

        <input
        type = "number"
        min = "1"
        max = "5"
        placeholder = "Enter Score"
        value = {values.impression}
        onChange = {handleChange}
        ></input>

        <br />

        <label>Should this presentation be presented as a paper in the AAPG Bulletin?</label>

        <input 
        type = "radio"
        name = "yes"
        value = {values.impression === true}
        onChange = {handleChange}
        checked
        >Yes</input>

        <br />

        <input
        type = "radio"
        name = "no"
        value = {values.impression === false}
        onChange = {handleChange}
        >No</input>
        
        <br />

        <label>Should this presentation be considered for "Distinquished Lecture Tour"?</label>

        <input 
        type = "radio"
        name = "yes"
        value = {values.impression === true}
        onChange = {handleChange}
        checked
        >Yes</input>

        <br />

        <input
        type = "radio"
        name = "no"
        value = {values.impression === false}
        onChange = {handleChange}
        >No</input>

        <br />

        <button
        onClick = {this.back}
        >Back</button>

        <button
        onClick = {this.continue}
        >Next</button>
      </div>
    )
  }
}

export default Impression
