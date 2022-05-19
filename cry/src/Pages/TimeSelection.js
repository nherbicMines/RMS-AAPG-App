import {Link } from "react-router-dom";
import React from 'react'

//Add a variable to determine PresenationType will be shown.
function TimeSelection() {
  return (
    <div>
      <p>Time Selection</p>
      
      <Link to = "/PresentationType">
        <button>Monday AM</button>
      </Link>

      <Link to = "/PresentationType">
        <button>Monday PM</button>
      </Link>

      <Link to = "/PresentationType">
        <button>Tuesday AM</button>
      </Link>

      <Link to = "/PresentationType">
        <button>Tuesday PM</button>
      </Link>
      </div>
  )
}

export default TimeSelection