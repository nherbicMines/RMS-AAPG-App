import React from 'react'
import UserForm from "./Components/UserForm";

/* Form Page
 * Function: Holds the page for a multiple page form. This will be the parent page of the subpages
 * Grade, Content, Impressions, and Comments. The user will be able to move back and forth through the
 * judging form easier.
 */
function JudgeForm() {
  return (
    <div className = "JudgeForm">
      Evaluation Form
      <UserForm />
<<<<<<< HEAD
      {console.log("Didn't make it ;/")}
      <div id="help-tip">
        <p>Add description of each criteria here.<br /></p>
      </div>
=======
>>>>>>> 7336caa6aa9558246566fdd58f5e357f05d82519
    </div>
    
  );
}

export default JudgeForm;