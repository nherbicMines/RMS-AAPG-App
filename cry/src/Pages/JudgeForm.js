import React from 'react';
import UserForm from "./Components/UserForm";
import { useState } from 'react';
import { Link, useParams} from 'react-router-dom'

/* Form Page
 * Function: Holds the page for a multiple page form. This will be the parent page of the subpages
 * Grade, Content, Impressions, and Comments. The user will be able to move back and forth through the
 * judging form easier.
 */
function JudgeForm() {
  const [data, setData] = useState('');
  let { time, session, presId } = useParams();
  console.log(time);
  console.log(session);
  console.log(presId);

  const passToForm = () => {
    setData(this.props.location)
  }
  return (
    <div className = "JudgeForm">
      <div class="bigText">
      Evaluation Form
      </div>
      <UserForm passToForm = {data} time = {time} session = {session} presId = {presId}/>
    </div>
    
  );
}

export default JudgeForm;