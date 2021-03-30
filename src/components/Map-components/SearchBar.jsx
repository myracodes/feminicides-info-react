import React from 'react'


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
                <p>Rechercher par prénom</p>
                <input 
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
