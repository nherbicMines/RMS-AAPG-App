import React from 'react'
import {Link } from "react-router-dom";
import pdf from "../pdf/Academic-Calendar-2022-23.pdf";

function Home() {
  
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/nexthorizon.jpg"}/>
      <div>
        <label>
          Judging Form
        </label>
        <br></br>
        <Link to = "/UserInfo">
          <button>Judging Form</button>
        </Link>
      </div>
      <div>
        <label>
          Schedule
        </label>
        <br></br>
        <a href={pdf} target = "_blank">
          <button> Schedule </button>
        </a>
      </div>
    </div>

  )
 
}
export default Home