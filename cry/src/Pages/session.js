import React, { Component } from 'react'
import SessionCards from './helpers/SessionCards';
import {Link, useLocation } from "react-router-dom";

//This is the session page, it simply displays the session cards class and has a back button
function Session() {
    return (
    <div>
        <p class="bigText">
        Sessions 
        </p>
        <SessionCards />
        <Link 
            to = {{
              pathname: "/TimeSelectioin",
              //If going backwards on the sessions page, only need the email to go back
              state: "email"
            }}>
            <button class="buttonSmallLexi">
                Back  
            </button>
        </Link>
            
    </div>
    )
}

export default Session