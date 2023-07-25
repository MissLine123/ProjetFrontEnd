
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function EditSpend() {
    const params = useParams()
    const [loading, setLoading] = useState( true);
    const [error, setError] = useState("");
    const [spend, setSpend] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:5000/spend/' + params.id)
        .then((response) =>{
            setLoading(false);
            setError('');
            setSpend(response.data);


        })
        .catch((error) =>{
            setLoading(false);
            setError(error);
            setSpend();
        });
    }, [])
    const handleDateChange = (event) => {
        // console.log(event.target.value);
        setSpend (event.target.value);
       
    }
    const handleMontantChange = (event) => {
        // console.log(event.target.value);
        setSpend (event.target.value);

       
    }
    const handleRemarquesChange = (event) => {
        // console.log(event.target.value);
        setSpend (event.target.value);
       
    }
    const handleCategorieChange = (event) => {
        // console.log(event.target.value);
        setSpend (event.target.value);
       
    }



  return (
    <div>
    <h1>{loading ? 'Loading...' : spend.date_depense}</h1> 
    <p>  {loading ? 'Loading...' : spend.montant_depense}</p>
       <p> {loading ? 'Loading...' : spend.remarque_depense}</p>
       <p> {loading ? 'Loading...' : spend.categorie}</p>
      
       <form action={`http://localhost:5000/spend/edit/${params.id}?_method=PUT`} method='post'>
    <input type="hidden" name="method" value="put" />
    
    <label>
            date:
        </label>
        <input type='date' name='date_depense' Value={spend.date_depense}   />
        <label>
            Montant:
        </label>
        <input type='number' name='montant_depense' Value={spend.montant_depense} min="1" />
        <label>
            Remarque
        </label>
        <input type='text' name='remarque_depense' Value={spend.remarque_depense} />
       
       

     <input type="submit" value="Modifier la dépense"/> 

    </form></div>
  )
}

export default EditSpend