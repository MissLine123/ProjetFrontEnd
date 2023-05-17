import React, { useEffect, useReducer } from "react"
import axios from "axios"

import Navbar from '../Navbar/Navbar'
import DeleteSpend from '../DeleteSpend/DeleteSpend'
import EditSpend from "../EditSpend/EditSpend"
import { Link } from "react-router-dom"

function Allspend() {
    const initialState = {
        loading: true,
        error: '',
        spend: {}
    }
    const reducer = (state, action)=>{
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
                error:'Something went wrong',
                spend: {},
                
            })
            case 'default': return state
        }
    }
 const [state,dispatch] = useReducer(reducer, initialState);

 useEffect(()=>{
    axios.get('http://localhost:5000/allspend')
    .then(response => {
        
        dispatch({type: 'FETCH_SUCCESS', payload: response.data
        })

    }).catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    });

 })
  return (
    <div>
    <Navbar/>

        <p>
            {state.loading ? 'Loading' : state.spend.map((spend,index)=>{
                return(
                    <div key={index}>
                        <p>{spend.date}</p>
                        <p>{spend.montant}</p>
                        <p>{spend.remarque}</p>
                        <p>{spend._id}</p>
                           
                           <Link to={`/spend/edit/${spend._id}`}>Editer</Link>
                            <DeleteSpend _id={spend._id} />
                            <hr/>
                    </div>
                )
            })}
        </p>
    </div>
  )
}

export default Allspend