import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios"



function Home(){
    const [jwt, setJWT] = useState({})

   
useEffect(() => {
    axios.get("http://localhost:5000/getJWT", {withCredentials: true})
    .then((response)=>{
        setJWT(response.data);
    })
    .catch((error)=>{
        setJWT(error.message);
    })},[])
 //CROCHET L15: POUR DIRE QUE LA REQUETTE EST REALISERE UNE SEULE FOIS

 console.log(jwt)
    return(
        <div>
      
<h1>Bienvenur sur le site</h1>

        </div>
    )
}
export default Home