import React from 'react'
import {Link } from "react-router-dom";

//Needs to figure out how to save the inputs and comminucate to the database. (Form?)
/* Grade Page
 * Function: To help the user place their judging score bases on the follow criteria. Once the user clicks the
 * next button this information will be saved into the database for further evaluation.
 */
function Grade() {

  function handleScore(e){
    
  }

  return (
    <div>
      <form>
        <p>Presentation</p>
        
        <label>Organization (0-20):</label>
        <input type = "number" id = "organization" name = "organization" min = "0" max = "20"/>

        <label>Attractiveness (0-10):</label>
        <input type = "number" id = "attractiveness" name = "attractiveness" min = "0" max = "10"/>

        <label>Legibility (0-5):</label>
        <input type = "number" id = "legibility" name = "legibility" min = "0" max = "5"/>

        <input type = "button" value = "Next"/>
      </form>
    </div>
  )
}

export default Grade