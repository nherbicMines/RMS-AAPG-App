import React, { Component } from 'react'

export class Content extends Component {
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
    <div className='contentPage'>
      <hedaer>Content</hedaer>
      <div id="help-tip-2">
        <p>Technical Originality: New concepts or interpretations? Significance and potential Longevity: Are the data interpretations and concepets useful to problems in earth science? How great the impact of this new information. Substantiation: Are data adequate and do they support the conclusion? <br /></p>
      </div>
      <br />
      <div>
        <label>Technical Originality (0-20)</label>
        <br/>
        <input
          type = "number"
          min = "0"
          max = "20"
          placeholder = "Enter Score"
          value = {values.originality}
          onChange = {handleChange("originality")}
        ></input>
      </div>
      <br />
      <div>
        <label>Significance & potential Longevity (0-20)</label>
        <br />
        <input 
          type = "number"
          min = "0"
          max = "20"
          placeholder = "Enter Score"
          value = {values.longevity}
          onChange = {handleChange("longevity")}
        ></input>
      </div>
      <br />
      <div>
        <label>Substantiation (0-20)</label>
        <br />
        <input 
          type = "number"
          min = "0"
          max = "20"
          placeholder = "Enter Score"
          value = {values.substantiation}
          onChange = {handleChange("substantiation")}
        ></input>
      </div>
      <br />
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
