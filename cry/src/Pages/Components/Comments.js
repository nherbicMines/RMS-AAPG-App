import { TextField } from '@mui/material';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

// Figure out how to return to session pages.
/* Comments Page
 * Funtion: To help the user place their feedback on their scores and suggestions. The user will be able to navigate
 * backwards to update any scores, and have options of where they would like to return. They can submit thier scores
 * and return to the session page or return to the schedule page.
*/

export class Comments extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit = e =>{
    Axios.post("http://localhost:3001/JudgeForm",{
      // email: this.props.values,
      // presentationNum = this.props.values,
      organization: this.props.values.organization,
      attractiveness: this.props.values.attractiveness,
      legibility: this.props.values.legibility,
      originality: this.props.values.originality,
      longevity: this.props.values.longevity,
      substantiation: this.props.values.substantiation,
      impression: this.props.values.impression,
      paper: this.props.values.bulletin,
      lectureTour: this.props.values.selectForTour,
      comments: this.props.values.comment})
  }

  render() {
    const {values, handleChange} = this.props;
    
    return (
      <div className = "comments-page">
        <header>Comments / Suggestions for the Presenter</header>
  
        <br />
        <TextField 
        id = "comment" 
        label = "Comment" 
        multiline 
        maxRows = {5}
        style = {{width:200}}
        value = {values.comment}
        onChange = {handleChange("comment")}
        ></TextField>
        {console.log(values.comment)}
        <br />

        <button
        class="buttonSmall"
        onClick = {this.back}
        >Back</button>

        <br />

        <Link to= "/TimeSelection">
          <input
          class="buttonSmall"
          type = "submit"
          value = "Submit and Return to Session"
          onClick = {this.handleSubmit}
          ></input>
        </Link>

      </div>
    )
  }
}

export default Comments
