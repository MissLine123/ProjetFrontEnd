import React from 'react'
// import { useParams } from 'react-router-dom'



function DeleteSpend(props) {



  return (
    <div><form action={`http://localhost:5000/spend/delete/${props._id}?_method=DELETE`} method='post'>
    <input type="hidden" name="method" value="delete" />
    
     <input type="submit" value="Supprimer la dépense"/> 

    </form></div>
  )
}

export default DeleteSpend