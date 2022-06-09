import React, { Component } from 'react'
import SessionCards from './helpers/SessionCards';
import {Link, useLocation } from "react-router-dom";

//This is the session page, it simply displays the session cards class and has a back button
function Session() {
    const location = useLocation();
    const { email } = location.state;
    console.log(email);

    return (
    <div>
        <p class="bigText">
        Sessions 
        </p>
        <SessionCards />
        <Link to={"/TimeSelection"}
          state={{
            email: email,
          }}>
            <button class="buttonSmallLexi">
                Back  
            </button>
        </Link>
            
    </div>
    )
}

export default Session