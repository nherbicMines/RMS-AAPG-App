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
    <div>
      <hedaer>Content</hedaer>

      <br />

      <label>Technical Originality (0-20)</label>

      <br />

      <input
        type = "number"
        min = "0"
        max = "20"
        placeholder = "Enter Score"
        value = {values.originality}
        onChange = {handleChange("originality")}
      ></input>

      <br />

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

      <br />

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
