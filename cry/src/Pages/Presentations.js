//This is the presentations page, it simply displays the presenation form class and has a back button
import PresentationForm from './helpers/PresentationForm';
import {Link } from "react-router-dom";
import Axios from 'axios'

function Presentations() {
  
  return (
    <div>
      <p class="bigText">
      Presentations
      </p>
      <PresentationForm />
      <Link to = "/Session">
        <button class="buttonSmallLexi">
          back 
        </button>
      </Link>
    </div>
  )
}

export default Presentations

