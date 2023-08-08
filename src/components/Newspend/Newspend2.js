import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'
import ListeGauche from '../Navbar/ListeGauche/ListeGauche'
import 'C:/Users/Marie/Desktop/MyProjet/MyProjet/FrontEnd/savemoneyF/node_modules/bootstrap/dist/css/bootstrap.min.css';
function Newspend() {


    const [logoName, setLogoName] = useState("")
    const [categorieName, setCategorieName] = useState("")

    const handleLogoChange = (event) => {
        setLogoName(event.target.className)
        setCategorieName(event.target.nextElementSibling.textContent)
    }

    const initialState = {
        loading: true,
        error: '',
        categories: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return (
                {
                    loading: false,
                    error: '',
                    categories: action.payload
                }
            )
            case 'FETCH_ERROR': return ({
                loading: false,
                error: 'Something went wrong',
                categories: {},

            })
            case 'default': return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:5000/allcategories')
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
            <div><ListeGauche /></div>
            <div>

                <form action='http://localhost:5000/submit-spend' method='post'>
                    <div className="form-group">
                        <label>  Date: </label>
                        <input type='date' name='date_depense' className="form-control" /></div>

                    <div className="form-group">
                        <label> Montant:</label>
                        <input type='number' name='montant_depense' className="form-control" /></div>

                    <div className="form-group">
                        <label for="type">Type :</label>

                        <select name="type" id="type" className="form-control">
                            <option value="Dépense">Dépense</option>
                            <option value="Revenu">Revenu</option>
                        </select></div>
                    <div className="form-group">
                        <label>  Remarque</label>
                        <input type='text' name='remarque_depense' className="form-control" /></div>




                    {state.loading ? 'Loading...' : state.categories.map((categorie, index) => {
                        return (
                            <div key={index} >
                          
                                <p> {categorie.type_categorie ? <div><Icon name={categorie.logoName} size='big' onClick={handleLogoChange} /> <p>{categorie.nom_categorie}</p> </div> : ""}</p>
                            </div>
                        )
                    })}
                    <input type="hidden" name="logoName" value={logoName} />
                    <input type="hidden" name="nom_categorie" value={categorieName} />
                    <input type='submit' value='Enregister une nouvelle depense ' />

                </form></div>

        </div>
    )
}

export default Newspend