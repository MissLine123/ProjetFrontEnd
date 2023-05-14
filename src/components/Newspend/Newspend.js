import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Newspend extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <form action='http://localhost:5000/submit-spend' method='post'>
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
     
       

        <input type='submit' value='Enregister une nouvelle depense ' />
      </form>
      
      </div>
    )
  }
}

export default Newspend
