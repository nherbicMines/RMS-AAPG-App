import React from 'react'

function userInfo() {
  return (
    <div clasName="information">
    <p>Judging Form</p>
    <p1>Please enter your information</p1>
    <form>
      <label className="textfields">
        First Name:
        <input type="text" name="name" />
        Last Name: 
        <input type="text" name="name" />
        Company:
        <input type="text" name="name" />
        Email:
        <input type="text" name="name" />
      </label>

      <div className="containButton">
      <input type="submit" value="Submit" />
      </div>

    </form>
    </div>
  )
}

export default userInfo