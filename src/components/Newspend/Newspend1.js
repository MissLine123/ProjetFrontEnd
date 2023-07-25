import React, { Component } from 'react'


class Newspend1 extends Component {
  render() {
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

        

        
     
       

        <input type='submit' value='Enregister une nouvelle depense ' />
      </form>
      
      </div>
    )
  }
}

export default Newspend1
