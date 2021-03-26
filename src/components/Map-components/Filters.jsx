import React from 'react'
import apiHandler from '../../api/apiHandler'

class Filters extends React.Component {

componentDidMount() {

    apiHandler
    .get()
    .then()
    .catch()
}

handleSubmitAge = (event) => {

}

handleSubmitRegion = (event) => {

}

    render(){
    return (
        <div>

        <form>
            <label for="age">Rechercher par tranche d'âges</label>
             <select className="age-input" name="age" id="age">
                <option class="select-option" value="15-25">15 - 25 ans</option>
                <option class="select-option" value="25-35">25 - 35 ans</option>
                <option class="select-option" value="35-45">35 - 45 ans</option>
                <option class="select-option" value="45-55">45 - 55 ans</option>
                <option class="select-option" value="55-65">55 - 65 ans</option>
                <option class="select-option" value="65-75">65 - 75 ans</option>
                <option class="select-option" value="75-100">75 ans et plus</option>
            </select>
            <button onSubmit={this.handleSubmitAge}>Rechercher</button>
        </form>
            
        <form>
            <label for="regions">Rechercher par région</label>
        {/* <select className="region-input" name="region" id="region">
                {this.XXXX.XXXX}.map((region) => {
                    return(<option class="select-option" value="{thisXXXX}">{region.name}</option>)
                })
           </form>
            
        </select> */}

            <button onSubmit={this.handleSubmitRegion}>Rechercher</button>

        </form>     



            
        </div>
    )
    }
}

export default Filters
