import React from 'react'

function Grade() {
  return (
    <div>
      <p>Presentation</p>
      
      <label>Organization (0-20):</label>
      <input type = "number" name = "organization"/>

      <label>Attractiveness (0-10):</label>
      <input type = "number" name = "attractiveness"/>

      <label>Legibility (0-5):</label>
      <input type = "number" name = "legibility"/>
    </div>
  )
}

export default Grade