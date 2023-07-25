import React, { Component } from 'react'

export class NewRevenue extends Component {
  render() {
    return (
        <div>
  
      <form action='http://localhost:5000/submit-revenu' method='post'>
        <label>
            date:
        </label>
        <input type='date' name='date_revenu' />
        <label>
            Montant:
        </label>
        <input type='number' name='montant_revenu' />
        <label>
            Remarque
        </label>
        <input type='text' name='remarque_revenu' />
     
       

        <input type='submit' value='Enregister un revenu ' />
      </form>
      
      </div>
    )
  }
}

export default NewRevenue
