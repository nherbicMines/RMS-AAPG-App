import React, { Component } from 'react'
import SessionCards from './helpers/SessionCards'
import {Link, useLocation, useParams } from "react-router-dom";

//This is the session page, it simply displays the session cards class and has a back button
function Session() {
    let { time } = useParams();
    console.log(time);

    return (
    <div>
        <p class="bigText">
        Sessions 
        </p>
        <SessionCards time={time}/>
        <Link to={"/TimeSelection"}
          state={{
           
          }}>
            <button class="buttonSmallLexi">
                Back  
            </button>
        </Link>
            
    </div>
    )
}

export default Session