//This is the presentations page, it simply displays the presenation form class and has a back button
import PresentationForm from './helpers/PresentationForm';
import {Link, useLocation } from "react-router-dom";
import Axios from 'axios'

function Presentations() {
  const location = useLocation();
  const { session } = location.state;
  console.log(session);
  return (
    <div>
      <p class="bigText">
      Presentations
      </p>
      <PresentationForm />
      <Link to={"/Session"}
          state={{
            session: session,
          }}>
        <button class="buttonSmallLexi">
          back 
        </button>
      </Link>
    </div>
  )
}

export default Presentations

