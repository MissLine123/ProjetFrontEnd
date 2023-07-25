import React, { Component } from 'react'

import { Icon } from 'semantic-ui-react'

class NewCategorie extends Component {
    state = {
        logoName: ""
    }

    handleLogoChange = (event) => {

        this.setState({
            logoName : event.target.className
        })
        console.log(this.state.logoName);
    }

    render() {
        return (
            <div>
                <form action='http://localhost:5000/submit-categorie' method='post'>
                    <label>
                        Nom du catégorie
                    </label>
                        <input type='text' name='nom_categorie' />

                    <input type="radio" id="depense"
                        name="type_categorie" value="true" />
                    <label for="depense">Catégorie de dépense</label>

                    <input type="radio" id="revenu"
                        name="type_categorie" value="false" />
                    <label for="revenu">Catégorie de revenu</label>


                    <table>
                        <tr>
                            <td>  <Icon name='home' size='big' onClick={this.handleLogoChange} /></td>
                            <td> <Icon name='bath' size='big' onClick={this.handleLogoChange} /></td>
                            <td> <Icon name='fax' size='big' onClick={this.handleLogoChange} /></td>
                            <td> <Icon name='phone' size='big' onClick={this.handleLogoChange} /></td>
                            <td> <Icon name='desktop' size='big' onClick={this.handleLogoChange} /></td>
                            <td> <Icon name='money bill alternate' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                        <tr>

                            <td>  <Icon name='ship' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='shop' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='euro sign' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='coffee' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='cut' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='envelope' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                        <tr>
                            <td>  <Icon name='plus square' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='medkit' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='camera' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='pencil alternate' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='user' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='diamond' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                        <tr>
                            <td>  <Icon name='female' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='male' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='users' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='leaf' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='star outline' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='bed' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                        <tr>
                            <td>  <Icon name='paw' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='plane' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='subway' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='suitcase' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='university' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='utensils' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                        <tr>
                            <td>  <Icon name='football ball' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='futbol' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='table tennis' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='lemon' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='android' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='apple' size='big' onClick={this.handleLogoChange} /></td>

                        </tr>
                        <tr>
                            <td>  <Icon name='bar' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='birthday' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='graduation' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='gbp' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='idea' size='big' onClick={this.handleLogoChange} /></td>
                            <td>   <Icon name='gift' size='big' onClick={this.handleLogoChange} /></td>
                        </tr>
                    </table>
                    <input type="hidden" name="logoName" value={this.state.logoName} />
                    <input type='submit' value='Enregister la catégorie ' />
                </form>
            </div>
        )
    }
}

export default NewCategorie