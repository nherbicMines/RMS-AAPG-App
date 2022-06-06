import { TextField } from '@mui/material';
import React, { Component } from 'react';

export class Content extends Component {
  continue = e => {
    e.preventDefault();
    if((this.props.values.originality != null && this.props.values.originality != '') &&
      (this.props.values.longevity != null && this.props.values.longevity != '') &&
      (this.props.values.substantiation != null && this.props.values.substantiation != '')){
        this.props.nextStep();
    }else{
      let message = ''
      if(this.props.values.originality == '' || this.props.values.originality == null){
        message += "Score Required: Originality\n";
      }
      if(this.props.values.longevity == '' || this.props.values.longevity == null){
        message += "Score Required: Longevity\n"
      }
      if(this.props.values.substantiation == '' || this.props.values.substantiation == null){
        message += "Score Required: Substantiation"
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
    const maxOriginality = 20;
    const minOriginality = 0;
    const maxLongevity = 20;
    const minLongevity = 0;
    const maxSubstantiation = 20;
    const minSubstantiation = 0;

  return (
    <div className='contentPage'>
      <header>Content</header>
      <br/>
      <div id="help-tip-2">
        <p>Technical Originality: New concepts or interpretations? Significance and potential Longevity: Are the data interpretations and concepets useful to problems in earth science? How great the impact of this new information. Substantiation: Are data adequate and do they support the conclusion? <br /></p>
      </div>
      
      <br />
      
      <div>
        <label>Technical Originality (0-20)</label>
        <br/>
        <TextField
          type = "number"
          inputProps = {{min: minOriginality, max: maxOriginality}}
          placeholder = "Enter Score"
          value = {values.originality}
          onChange = {handleChange("originality")}
          error = {this.validate("originality")}
          helperText = {this.validate("originality")}
        ></TextField>
      </div>
      
      <div>
        <label>Significance & Potential Longevity (0-20)</label>
        <br />
        <TextField 
          type = "number"
          inputProps = {{min: minLongevity, max: maxLongevity}}
          placeholder = "Enter Score"
          value = {values.longevity}
          onChange = {handleChange("longevity")}
          error = {this.validate("longevity")}
          helperText = {this.validate("longevity")}
        ></TextField>
      </div>
      
      <div>
        <label>Substantiation (0-20)</label>
        <br />
        <TextField 
          type = "number"
          inputProps = {{min: minSubstantiation, max: maxSubstantiation}}
          placeholder = "Enter Score"
          value = {values.substantiation}
          onChange = {handleChange("substantiation")}
          error = {this.validate("substantiation")}
          helperText = {this.validate("substantiation")}
        ></TextField>
      </div>
      {console.log(values.originality)}
      {console.log(values.longevity)}
      {console.log(values.substantiation)}
   
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

export default Content
