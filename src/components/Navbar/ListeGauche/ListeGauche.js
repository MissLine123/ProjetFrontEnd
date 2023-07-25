import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './listeGauche.css'

function ListeGauche() {
  return (
    <div id="listeGauche"> 
    <Link to='/portefeuille' class='list'> Détail</Link>
    <Link to='/categorie' class='list'>Analytique par catégorie</Link>
    <Link to='/revenu' class='list'>Les revenus</Link>
    <Link to='/depense' class='list'>Les dépenses</Link>
    <Link to='/newspend' class='list'>Ajouter une dépenses</Link>
    <Link to='/newrevenu' class='list'>Ajouter un revenu</Link>
    <Link to='/newcategorie' class='list'>Ajouter une catégorie</Link>
    <Outlet/>
    </div>
  )
}

export default ListeGauche