import React, {Component} from 'react'
import {Link } from "react-router-dom"
import Grade from "./Grade"
import Content from "./Content"
import Impression from "./Impression"
import Comments from "./Comments"

/* User Form Parent Page
 * Function: To help organize the different pages in the judging form. Sets up what will be displayed on each step.
 * Buttons are implenmented on each page to help link the pages together when needed.
 */

export class UserForm extends Component {
    constructor(props){
        super(props);
        this.nextStep = this.nextStep.bind();
        this.prevStep = this.prevStep.bind();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            step: 1,
            email: this.props.passToForm[0],
            presentationNum: this.props.passToForm[1],
            organization: '',
            actractiveness: '',
            legibility: '',
            originality: '',
            longevity: '',
            substantiation: '',
            impression: '',
            bulletin: null,
            selectForTour: null,
            comment: ''
        }
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
    }

    // Handle fields change
    handleChange = input => e => {
        const errorCheck = {
            "organization": [-1, 21],
            "actractiveness": [-1, 11],
            "legibility": [-1, 6],
            "originality": [-1, 21],
            "longevity": [-1, 21],
            "substantiation": [-1, 21],
            "impression": [0,6]
        }
        if(errorCheck.hasOwnProperty(input)){
            if(e.target.value > errorCheck[input][0] && e.target.value < errorCheck[input][1]){
                this.setState({ [input]: e.target.value });
            }else if(e.target.value == ""){
                this.setState({ [input]: e.target.value });
            }else{
                this.setState({ [input]: null });
            }
        }else{
            this.setState({ [input]: e.target.value });
        }
    }
    
    render() {
        const { step } = this.state;
        const {email, presentationNum, organization, actractiveness, legibility, originality, longevity, substantiation, impression, bulletin, 
            selectForTour, comment} = this.state;
        const values = {email, presentationNum, organization, actractiveness, legibility, originality, longevity, substantiation, impression, 
            bulletin, selectForTour, comment};

        switch(step) {
            case 1:
                return (
                    <Grade
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}  
                        time = {this.props.time}
                        session = {this.props.session}
                        presId = {this.props.presId}
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
