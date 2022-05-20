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
      judge form
      <UserForm />
    </div>
  );
}

export default JudgeForm;