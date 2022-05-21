import React from 'react'

var myarray = ["", "enter","some","presentations"]

function OralPresentations() {
  
  return (
    <div>
        Oral Presentations
        <br />
      <PresentationForm />
    </div>
  )
}

class PresentationForm extends React.Component{
  constructor(props) {
    super(props);
    //create ref to store selection
    this.presentation = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.presentation.current.value === ""){
      alert("Must pick a presentation");
    }
    else{
      alert(this.presentation.current.value);
    }
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <select ref={this.presentation}>
            {myarray.map(data=>(
              <option title={'data'}>{data}</option>
            ))}
        </select>
        <br />
        <input type="submit" name="Submit" />
      </form>
    )
  }

}


export default OralPresentations

