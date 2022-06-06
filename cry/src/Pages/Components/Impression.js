import { TextField, Radio, RadioGroup } from '@mui/material';
import React, { Component } from 'react'

// Figure out why impression isn't allowing input and how come the checkboxes are werid.
/* Impression Page
 * Function: To help the judging score based on the follow criteria. The user will be able to navigate to the previous
 * and next page. Then this information will be saved into the database.
 */
export class Impression extends Component {
  continue = e => {
    e.preventDefault();
    if(this.props.values.impression != '' && this.props.values.impression != null){
      this.props.nextStep();
    }else{
      alert("Score Required: Impression");
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  validate = input => {
    let invalidEntry = "";
    invalidEntry = this.props.values[input]!= null ? "" : "Invaild Score";
    return invalidEntry;
  };

  render() {
    const {values, handleChange} = this.props;
    const maxImpression = 5;
    const minImpresssion = 1;

    return (
      <div className='impressionsPage'>
        <header>Overall Impression</header>
        <div>
          <label>1-5 (5 = Excellent)</label>
          <br />
          <TextField
            type = "number"
            inputProps = {{min: minImpresssion, max:maxImpression}}
            placeholder = "Enter Score"
            value = {values.impression}
            onChange = {handleChange("impression")}
            error = {this.validate("impression")}
            helperText = {this.validate("impression")}
          ></TextField>
        </div>
        
        
        <div>
          <label>Should this presentation be presented as a paper in the AAPG Bulletin?</label>
          <br />
          <label>
            <input 
              type = "radio"
              id = "bulletin"
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
              id = "bulletin"
              value = {false}
              onChange = {handleChange("bulletin")}
            ></input>
            No
          </label>
        </div>

        
        <div>
          <label>Should this presentation be considered for "Distinquished Lecture Tour"?</label>
          <br />
          <label>
            <input 
              type = "radio"
              name = "selectForTour"
              value = {true}
              onChange = {handleChange("selectForTour")}
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

        {console.log(values.impression)}
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
