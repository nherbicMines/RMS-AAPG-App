import React, { Component, useState } from 'react'
import SessionCards from './helpers/SessionCards';
import {Link, useLocation } from "react-router-dom";

//This is the session page, it simply displays the session cards class and has a back button
function Session() {

    return (
    <div>
        <p class="bigText">
        Sessions 
        </p>
        <SessionCards/>
        <Link to="/TimeSelection">
            <button class="buttonSmallLexi">
                Back  
            </button>
        </Link>
            
    </div>
    )
}

export default Session