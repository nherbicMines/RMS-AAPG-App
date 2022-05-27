import React, {Component} from 'react'
import {Link } from "react-router-dom"
import Grade from "./Grade"
import Content from "./Content"
import Impression from "./Impression"
import Comments from "./Comments"

//Need to figure out how to return the user to presentation page when they submit scores.
/* User Form Parent Page
 * Function: To help organize the different pages in the judging form. Sets up what will be displayed on each step.
 * Buttons are implenmented on each page to help link the pages together when needed.
 */

export class UserForm extends Component {
    
    state = {
        step: 1,
        organization: 0,
        actractiveness: 0,
        legibility: 0,
        originality: 0,
        longevity: 0,
        substantiation: 0,
        impression: 1,
        bulletin: null,
        selectForTour: null,
        comment: ""
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {organization, actractiveness, legibility, originality, longevity, substantiation, impression, bulletin, 
            selectForTour} = this.state;
        const values = {organization, actractiveness, legibility, originality, longevity, substantiation, impression, 
            bulletin, selectForTour}

        switch(step) {
            case 1:
                return (
                    <Grade
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}  
                    />     
                );
            case 2:
                return (
                    <Content
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}  
                    />     
                );
            case 3:
                return (
                    <Impression
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}  
                    />     
                );
            case 4: 
                return (
                    <Comments
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}  
                    />     
                );
            default:
                return(
                    <Link to = "./ErrorPage"></Link>
                )

        }
    }
}

export default UserForm
