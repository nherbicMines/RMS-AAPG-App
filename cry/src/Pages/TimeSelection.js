import React from 'react'
import {Link } from "react-router-dom";

//Add a variable to determine PresenationType will be shown.
/* Time Selection Page
 * Function: Displays different button options to choose which day the judging will take place.
 * All the buttons are linked to the corresponding Presentation Type Page.
*/
function TimeSelection() {
  return (
    <div className = "timeSelection">
      <p>Time Selection</p>
      
      <Link to = "/PresentationType">
        <button>Monday AM</button>
      </Link>

      <br />

      <Link to = "/PresentationType">
        <button>Monday PM</button>
      </Link>

      <br />

      <Link to = "/PresentationType">
        <button>Tuesday AM</button>
      </Link>

      <br />

      <Link to = "/PresentationType">
        <button>Tuesday PM</button>
      </Link>
    </div>
  )
}

export default TimeSelection