import React, { Component } from 'react'

//Needs to figure out how to save the inputs and comminucate to the database. (Form?)
/* Grade Page
 * Function: To help the user place their judging score bases on the follow criteria. Once the user clicks the
 * next button this information will be saved into the database for further evaluation.
 */

export class Grade extends Component {
  render() {
    return (
      <div>
        <h1>Grade Hoe</h1>
      </div>
    )
  }
}

export default Grade


// function Grade({formData, setFormData}) {

//   return (
//     <div className = "grade-container">
//       <input 
//       type = "number"
//       min = "0"
//       max = "20"
//       placeholder = "Organization..."
//       value = {formData.organization}
//       onChange = {(e) =>
//         setFormData({...formData, organization: e.target.value})
//       }
//       ></input>

//       <input 
//       type = "number"
//       min = "0"
//       max = "10"
//       placeholder = "Attractiveness..."
//       value = {formData.actractiveness}
//       onChange = {(e) =>
//         setFormData({...formData, actractiveness: e.target.value})
//       }
//       ></input>

//       <input 
//       type = "number"
//       min = "0"
//       max = "5"
//       placeholder = "Legibility..."
//       value = {formData.legibility}
//       onChange = {(e) =>
//         setFormData({...formData, legibility: e.target.value})
//       }
//       ></input>
//     </div>
//   )
// }

// export default Grade;