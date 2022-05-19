import React from 'react'
import {Link } from "react-router-dom";





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
    </div>

  )
 
}
export default Home