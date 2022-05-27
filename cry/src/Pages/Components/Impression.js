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
      <div className='impressionsPage'>
        <div id="help-tip-3">
          <p>Add description of each criteria here. Impression<br /></p>
        </div>
        <header>Overall Impression</header>

        <br />

        <div>
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
        </div>
        
        <br />
        
        <div>
          <label>Should this presentation be presented as a paper in the AAPG Bulletin?</label>
          <br />
          <label>
            <input 
              type = "radio"
              name = "bulletin"
              value = {true}
              onChange = {handleChange("bulletin")}
            ></input>
            Yes
          </label>
        </div>
    
        <div>
          <label>
            <input
              type = "radio"
              name = "bulletin"
              value = {false}
              onChange = {handleChange("bulletin")}
            ></input>
            No
          </label>
        </div>

        <br />
        
        <div>
          <label>Should this presentation be considered for "Distinquished Lecture Tour"?</label>
          <br />
          <label>
            <input 
              type = "radio"
              name = "selectForTour"
              value = {true}
              onChange = {handleChange("selectForTour")}g
              ></input>
            Yes
          </label>
        </div>
        
        <div>
          <label>
            <input
            type = "radio"
            name = "selectForTour"
              value = {false}
              onChange = {handleChange("selectForTour")}
            ></input>
            No
          </label>
        </div>


        {console.log(values.bulletin)}
        {console.log(values.selectForTour)}

        <button
        class="buttonSmall"
        onClick = {this.back}
        >Back</button>

        <button
        class="buttonSmall"
        onClick = {this.continue}
        >Next</button>
      </div>
    )
  }
}

export default Impression
