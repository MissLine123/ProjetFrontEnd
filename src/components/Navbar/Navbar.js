import React from 'react'

import { Link } from 'react-router-dom'



function Navbar() {
  return (
   <nav>
        <Link to='/'> Accueil</Link>
        <Link to='/allspend'>Mon journal de dépense</Link>
        <Link to='/newspend'>ajouter une dépense</Link>
        <Link to='/login'>Se connecter</Link>
    
       

   </nav>
  )
}

export default Navbar