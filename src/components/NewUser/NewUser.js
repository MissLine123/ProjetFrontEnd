import React from 'react'

function NewUser() {
  return (
    <div>
 <form action="http://localhost:5000/api/signup" method="post">
        <label for="name">Name</label>
        <input type="text" name="name"/>

        <label for="firstname">First Name</label>
        <input type="text" name="firstname"/>

        <label for="email">email</label>
        <input type="text" name="email" id="email"/>
        
        <label for="password">Password</label>
        <input type="password" name="password" id="password"/>


        <input type="submit" value="Inscription"/>

    </form>

    </div>
  )
}

export default NewUser