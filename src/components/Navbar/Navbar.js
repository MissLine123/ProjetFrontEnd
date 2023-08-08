import React from 'react'
import navbar from '../Navbar/navbar.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from "react"



function Navbar() {
  const [jwt, setJWT] = useState({})

   
  useEffect(() => {
      axios.get("http://localhost:5000/getJWT", {withCredentials: true})
      .then((response)=>{
          setJWT(response.data);
      })
      .catch((error)=>{
          setJWT(error.message);
      })},[])
   //CROCHET L22: POUR DIRE QUE LA REQUETTE EST REALISERE UNE SEULE FOIS
   console.log(jwt)

   function changeColor(event){
    event.target.style.background = "red";
    console.log(event.target.style.background)
}
document.getElementsByClassName("link").onclick = changeColor;

  return (
   <nav className="topnav">
 

    
        <Link to='/' className="link"  id="accueil"> Accueil</Link>
        <Link to='/portefeuille' className="link">Mon journal de dépense</Link>
       
        <Link to='/newuser' className="link">S'inscrire</Link>
        {jwt ? <Link to='http://localhost:5000/logout' className="link">Se déconnecter</Link> :<Link to='/login' className="link">Se connecter</Link> }

        
    
       

   </nav>
  )
}

export default Navbar