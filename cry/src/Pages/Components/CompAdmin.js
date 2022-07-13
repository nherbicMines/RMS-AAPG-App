import React, { Component } from 'react' ;
import { Link } from "react-router-dom";
import Axios from 'axios';


export class CompAdmin extends Component {

    constructor(props) {

        super(props)

    this.handleSubmit = this.handleSubmit.bind(this);


    
    Load = e => {
        e.preventDefault();

    }

    handleSubmit = e => {
        Axios.get()
    }
}

}