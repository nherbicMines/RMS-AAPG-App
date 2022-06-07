import { TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { Component } from 'react'

/* Impression Page
 * Function: To help the judging score based on the follow criteria. The user will be able to navigate to the previous
 * and next page. Then this information will be saved into the database.
 */
export class Impression extends Component {
  continue = e => {
    e.preventDefault();
    if((this.props.values.impression != '' && this.props.values.impression != null) &&
      this.props.values.bulletin != null && this.props.values.selectForTour != null){
      this.props.nextStep();
    }else{
      let message  = '';
      if(this.props.values.impression == '' || this.props.values.impression == null){
        message += "Score Required: Impression\n"
      }
      if(this.props.values.bulletin == null){
        message += "Input Required: AAPG Bulletin\n"
      }
      if(this.props.values.selectForTour == null){
        message += "Input Required: Distinquished Lecture Tour"
      }
      alert(message)
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
      <div className='criteria'>
        <header><u>Overall Impression</u></header>
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
          <RadioGroup class = "radioButtons" value = {values.bulletin} onChange = {handleChange("bulletin")}>
            <FormControlLabel 
            value = "Yes"
            control = {<Radio/>} 
            label = "Yes"/>
            <br />
            <FormControlLabel 
            value = "No"
            control = {<Radio/>} 
            label = "No"/>
          </RadioGroup>
        </div>

        <div>
          <label>Should this presentation be considered for "Distinquished Lecture Tour"?</label>
          <RadioGroup class = "radioButtons" value = {values.selectForTour} onChange = {handleChange("selectForTour")}>
            <FormControlLabel 
            value = "Yes"
            control = {<Radio/>} 
            label = "Yes"/>
            <br />
            <FormControlLabel 
            value = "No"
            control = {<Radio/>} 
            label = "No"/>
          </RadioGroup>
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
