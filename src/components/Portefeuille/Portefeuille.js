import React from 'react'
import './portefeuille.css'
import ListeGauche from '../Navbar/ListeGauche/ListeGauche'
import Allspend from '../Allspend/Allspend'
function Portefeuille() {
  return (<div class="portefeuille">

<div id="listeGauche">

    <ListeGauche/>
</div>
<div id="allspend">
     <Allspend/>    
  
  </div> 

  </div>
  )
}

export default Portefeuille