import React, {useEffect,useReducer} from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'

function Newspend() {


    const [logoName, setLogoName] = useState("")
    const [categorieName, setCategorieName] = useState("")
    
    const handleLogoChange =(event)=>{
        setLogoName(event.target.className)
        setCategorieName(event.target.nextElementSibling.textContent)
    }

    const initialState = {
        loading: true,
        error: '',
        categories: {}
    }
    const reducer = (state, action)=>{
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
                error:'Something went wrong',
                categories: {},
                
            })
            case 'default': return state
        }
    }
 const [state,dispatch] = useReducer(reducer, initialState);

 useEffect(()=>{
    axios.get('http://localhost:5000/allcategories')
    .then(response => {
        
        dispatch({type: 'FETCH_SUCCESS', payload: response.data
        })

    }).catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    });

 })
  return (
    <div>
    <form action='http://localhost:5000/submit-spend' method='post'>
        <label>
            date:
        </label>
        <input type='date' name='date_depense' />
        <label>
            Montant:
        </label>
        <input type='number' name='montant_depense' />
        <label>
            Remarque
        </label>
        <input type='text' name='remarque_depense' />

        <input type="hidden" name="logoName" value={logoName} />
        <input type="hidden" name="nom_categorie" value={categorieName} />
        <input type='submit' value='Enregister une nouvelle depense ' />
    

{state.loading ? 'Loading...' : state.categories.map((categorie, index) => {
            return (
                <div key={index} >

           
               <p> {categorie.type_categorie ? <div><Icon name={categorie.logoName} size='big' onClick={handleLogoChange}/> <p>{categorie.nom_categorie}</p> </div>: "" }</p>
        
  
            
                
               
               

          
                   


                </div>
            )
        })}
  </form>

    </div>
  )
}

export default Newspend