import React from 'react';
import UserForm from "./Components/UserForm";
import { useState } from 'react';

/* Form Page
 * Function: Holds the page for a multiple page form. This will be the parent page of the subpages
 * Grade, Content, Impressions, and Comments. The user will be able to move back and forth through the
 * judging form easier.
 */
function JudgeForm() {
  const [data, setData] = useState('');

  const passToForm = () => {
    setData(this.props.location)
  }
  return (
    <div className = "JudgeForm">
      <div class="bigText">
      Evaluation Form
      </div>
      <UserForm passToForm = {data}/>
    </div>
    
  );
}

export default JudgeForm;