import React, { Component } from 'react'
import {Link } from "react-router-dom"

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

  render() {
    const {values, handleChange} = this.props;
    return (
      <div className = "comments-page">
        <header>Comments / Suggestions for the Presenter</header>

        <br />

        <textarea name = "comment" cols = "50" rows = "5"></textarea>

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
          //onSubmit = {alert("Your scores have been submited. Returning to Session.")}
          ></input>
        </Link>

      </div>
    )
  }
}

export default Comments
