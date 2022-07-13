import React from 'react'
import {Link } from "react-router-dom";
<<<<<<< HEAD
import pdf from "../pdf/RMS2022-Technical-Program.pdf";
=======
import pdf from "../pdf/schedule.pdf";
>>>>>>> 0ea511df3624518391e77c05f46923cb800213f8

function Home() {
  
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/nexthorizon.jpg"} alt="RMS-AAPG Logo"/>
      <div>
        <Link to = "/UserInfo">
          <button class="button">Evaluation Form</button>
        </Link>
      </div>
      <div>
        <a href={pdf} target = "_blank" rel="noreferrer">
          <button class="button"> Schedule </button>
        </a>
      </div>
    </div>

  )
 
}
export default Home