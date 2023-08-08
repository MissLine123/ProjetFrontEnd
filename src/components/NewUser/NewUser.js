import React from 'react'
import 'C:/Users/Marie/Desktop/MyProjet/MyProjet/FrontEnd/savemoneyF/node_modules/bootstrap/dist/css/bootstrap.min.css';
function NewUser() {
  return (
    <div>
    <h1>Inscription: </h1>
      <form action="http://localhost:5000/api/signup" method="post">
       
        <div className="form-group">
         <label for="name">Name: </label>
          <input type="text" name="name" className="form-control"/> </div>
          <div className="form-group">
        <label for="firstname">First Name: </label>
        <input type="text" name="firstname" className="form-control" /> </div>
        <div className="form-group">
        <label for="email">email: </label>
        <input type="text" name="email" id="email" className="form-control"/> </div>
        <div className="form-group">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" className="form-control" /></div>


        <input type="submit" value="Inscription" />

      </form>

    </div>
  )
}

export default NewUser