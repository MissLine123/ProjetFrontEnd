import React from 'react'
import navbar from '../Navbar/navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
   <nav>
        <Link to='/' className="centrer"> Accueil</Link>
        <Link to='/allspend' className="centrer">Mon journal de dépense</Link>
        <Link to='/newspend' className="centrer">ajouter une dépense</Link>
        <Link to='/login' className="centrer">Se connecter</Link>
        <Link to='/newuser' className="centrer">S'inscrire</Link>
    
       

   </nav>
  )
}

export default Navbar