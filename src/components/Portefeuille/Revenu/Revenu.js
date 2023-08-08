import React, { useEffect, useReducer } from "react"
import axios from "axios"
import ListeGauche from '../../Navbar/ListeGauche/ListeGauche'
import DeleteSpend from '../../DeleteSpend/DeleteSpend'
import EditSpend from "../../EditSpend/EditSpend"
import { Link } from "react-router-dom"
function Revenu() {
  const initialState = {
    loading: true,
    error: '',
    spend: {}
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': return (
        {
          loading: false,
          error: '',
          spend: action.payload
        }
      )
      case 'FETCH_ERROR': return ({
        loading: false,
        error: 'Something went wrong',
        spend: {},

      })
      case 'default': return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:5000/allspend')
      .then(response => {

        dispatch({
          type: 'FETCH_SUCCESS', payload: response.data
        })

      }).catch(error => {
        dispatch({ type: 'FETCH_ERROR' })
      });

  })
  return (
    <div class="portefeuille">
      <div>  <ListeGauche />
      </div>

       {state.loading ? 'Loading' : state.spend.map((spend, index) => {
            return (<div>
              {spend.type === 'Dépense' ? '' : 
               <div >
                  <p>date: {spend.date_depense}</p>
                  <p>Catégorie: {spend.nom_categorie}</p>
                  <p>Montant: {spend.montant_depense}</p>
                  <p>Type: {spend.type}</p>
                  <p>Remarques: {spend.remarque_depense}</p>
                  <button> <Link to={`/spend/edit/${spend._id}`}>Editer</Link></button>  
                            <DeleteSpend _id={spend._id} />
                            <hr/>
                </div>
              }
            </div>)
          })}</div>
  )
}

export default Revenu