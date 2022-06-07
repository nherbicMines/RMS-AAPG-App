import React from 'react'
import {Link } from "react-router-dom";
import pdf from "../pdf/Academic-Calendar-2022-23.pdf";

function Home() {
  
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/nexthorizon.jpg"}/>
      <div>
        <Link to = "/UserInfo">
          <button class="button">Evaluation Form</button>
        </Link>
      </div>
      <div>
        <a href={pdf} target = "_blank">
          <button class="button"> Schedule </button>
        </a>
      </div>
    </div>

  )
 
}
export default Home