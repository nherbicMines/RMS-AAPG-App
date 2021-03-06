//This is the presentations page, it simply displays the presenation form class and has a back button
import PresentationForm from './helpers/PresentationForm';
import {Link, useParams } from "react-router-dom";
//import Axios from 'axios'

function Presentations() {
  let {time, session} = useParams();
  console.log(time);
  console.log(session);

  return (
    <div>
      <p class="bigText">
      Presentations
      </p>
      <Link to={`/Session/${time}`}>
        <button class="buttonSmallLexi">
          Back 
        </button>
      </Link>
      <PresentationForm time={time} session={session}/>
      <br></br>
      <Link to={`/Session/${time}`}>
        <button class="buttonSmallLexi">
          Back 
        </button>
      </Link>
    </div>
  )
}

export default Presentations

