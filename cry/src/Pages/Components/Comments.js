import React, { Component } from 'react'

export class Comments extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleChange} = this.props;
    return (
      <div>
        <header></header>
        
      </div>
    )
  }
}

export default Comments
