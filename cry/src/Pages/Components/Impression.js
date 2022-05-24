import React, { Component } from 'react'

// Figure out why impression isn't allowing input and how come the checkboxes are werid.
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
        type = "text"
        min = "1"
        max = "5"
        placeholder = "Enter Score"
        value = {values.impression}
        onChange = {handleChange("impression")}
        ></input>

        <br />
        
        <label>Should this presentation be presented as a paper in the AAPG Bulletin?</label>

        <br />

        <label>
          <input 
          type = "radio"
          name = "bulletin"
          value = {values.bulletin = Boolean(true)}
          onChange = {handleChange("bulletin")}
          checked
          ></input>
          Yes
        </label>

        <br />

        <label>
          <input
          type = "radio"
          name = "bulletin"
          value = {values.bulletin = Boolean(false)}
          onChange = {handleChange("bulletin")}
          ></input>
          No
        </label>
        
        <br />

        <label>Should this presentation be considered for "Distinquished Lecture Tour"?</label>

        <br />

        <label>
          <input 
          type = "radio"
          name = "selectForTour"
          value = {values.selectForTour = Boolean(true)}
          onChange = {handleChange("selectForTour")}
          checked
          ></input>
          Yes
        </label>

        <br />

        <label>
          <input
          type = "radio"
          name = "selectForTour"
          value = {values.selectForTour = Boolean(false)}
          onChange = {handleChange("selectForTour")}
          ></input>
          No
        </label>

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
