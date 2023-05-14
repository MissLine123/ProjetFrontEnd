import React from 'react'
import { useParams } from 'react-router-dom'



function DeleteSpend() {
    const params = useParams()

  return (
    <div><form action={`http://localhost:5000/spend/delete/${params.id}?_method=DELETE`} method='post'>
    <input type="hidden" name="mehod" value="delete" />
    
     <input type="submit" value="Supprimer la dépense"/> 

    </form></div>
  )
}

export default DeleteSpend