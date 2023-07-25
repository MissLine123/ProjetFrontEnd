import React from 'react'
import navbar from '../Navbar/navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
   <nav class="topnav">
        <Link to='/' className="link"> Accueil</Link>
        <Link to='/portefeuille' className="link">Mon journal de dépense</Link>
        <Link to='/login' className="link">Se connecter</Link>
        <Link to='/newuser' className="link">S'inscrire</Link>
    
       

   </nav>
  )
}

export default Navbar