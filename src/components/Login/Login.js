import React from 'react'


function Login() {
  return (
   <div>
   <h1>Formulaire de connxion</h1>
   <form action="/api/login" method="post">
   <label for="email">Email:</label>
   <input type="email" name="email" id="email"/>

   <label for="password">password</label>
   <input type="password" name="password" id="password"/>
   <input type="submit" value="Connexion"/>
   </form>
   </div>
  )
}

export default Login