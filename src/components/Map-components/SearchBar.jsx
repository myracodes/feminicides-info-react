import React from 'react'
import "../../styles/global.css"


class SearchBar extends React.Component {

    handleChange = (event) => {
        let inputName = event.target.value;
        this.props.searchByName(inputName)
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <p className="form-label">Rechercher par prénom</p>
                <input
                className="form-input" 
                onChange={this.handleChange}
                type="text"
                placeholder="Prénom"
                />
            </form>
            
        </div>
    )
    }
}

export default SearchBar;
