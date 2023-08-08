import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './listeGauche.css'

function ListeGauche() {
  
  return (
    <div id="listeGauche"> 
    <Link to='/portefeuille' className='list'> Détail <i className="fleche droite"></i></Link>
    <Link to='/categorie' className='list'>Analytique par catégorie <i className="fleche droite"></i></Link>
    <Link to='/revenu' className='list'>Les revenus <i className="fleche droite"></i></Link>
    <Link to='/depenses' className='list'>Les dépenses <i className="fleche droite"></i></Link>
    <Link to='/newspend' className='list'>Ajouter une transaction <i className="fleche droite"></i></Link>
    <Link to='/newcategorie' className='list'>Ajouter une catégorie <i className="fleche droite"></i></Link>
    <Outlet/>


 
    </div>
  )
}

export default ListeGauche