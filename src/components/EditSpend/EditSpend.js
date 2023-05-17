
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
    })

  return (
    <div><form action={`http://localhost:5000/spend/edit/${params._id}?_method=PUT`} method='post'>
    <input type="hidden" name="method" value="put" />
    
    <label>
            date:
        </label>
        <input type='date' name='date' />
        <label>
            Montant:
        </label>
        <input type='number' name='montant' />
        <label>
            Remarque
        </label>
        <input type='text' name='remarque' />
     
       

     <input type="submit" value="Modifier la dépense"/> 

    </form></div>
  )
}

export default EditSpend