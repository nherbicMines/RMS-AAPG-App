import React from 'react'
import {Link } from "react-router-dom";
import pdf from "../pdf/RMS2022-Technical-Program.pdf";

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