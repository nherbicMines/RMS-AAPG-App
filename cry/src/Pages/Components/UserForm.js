import React, {Component} from 'react'
import {Link } from "react-router-dom";
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
        page: 1,
        organzation: 0,
        attractiveness: 0,
        legibility: 0,
        originality: 0,
        longevity: 0,
        substantiation: 0,
        impression: 0,
        bulletin: false,
        selectForTour: false,
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
        const {organzation, attractiveness, legibility, originality, longevity, substantiation, impression, bulletin, 
            selectForTour} = this.state;
        const values = {organzation, attractiveness, legibility, originality, longevity, substantiation, impression, 
            bulletin, selectForTour}

        switch(step) {
            case 1:
                return (
                    <Grade
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}  
                    />     
                );
            case 2:
                return (
                    <Content
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}  
                    />     
                );
            case 3:
                return (
                    <Impression
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}  
                    />     
                );
            case 4: 
                return (
                    <Comments
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}  
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

// function UserForm() {
//     const [page, setPage] = useState(0);
//     const [formData, setFormData] = useState({
//         page: 0,
//         organzation: 0,
//         attractiveness: 0,
//         legibility: 0,
//         originality: 0,
//         longevity: 0,
//         substantiation: 0,
//         impression: 0,
//         bulletin: false,
//         selectForTour: false,
//         comment: ""
//     });

//     const FormTitles = ["Presentation", "Content", "Overall Impression", "Comments for the Presenter"];

//     const PageDisplay = () => {
//         if (page === 0){
//             setFormData({...formData.page = page});
//             return <Grade formData = {formData} setFormData = {setFormData} />
//         }else if (page === 1){
//             setFormData({...formData.page = page});
//             return <Content formData = {formData} setFormData = {setFormData} />
//         }else if (page === 2){
//             setFormData({...formData.page = page});
//             return <Impression formData = {formData} setFormData = {setFormData} />
//         }else if (page === 3){
//             setFormData({...formData.page = page});
//             return <Comments formData = {formData} setFormData = {setFormData} />
//         }
//     }

//   return (
//     <div className = "form-container">
//         <div className = "header">
//             <h1>{FormTitles[page]}</h1>
//         </div>
//         <div className = "body">{PageDisplay()}</div>
//         <div className = "footer">
//             <button 
//             disabled={page === 0} 
//             onClick={() => {
//                 setPage((currPage) => currPage - 1);
//             }}>Back</button>

//             <button
//             disable = {page === 3}
//             onClick={() =>{
//                 setPage((currPage) => currPage + 1);
//             }}>Next</button>

//             <Link to = "./Presentations">
//                 <button
//                 disabled = {page === 0 || page === 1 || page === 2}
//                 onClick = {() => {
//                     alert("Score has been submitted.")
//                 }}>Sumbit and Return to Session</button>
//             </Link>

//             <Link to = "./Schedule">
//                 <button disabled = {page === 0 || page === 1 || page === 2}
//                 >Return to Schedule</button>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default UserForm

