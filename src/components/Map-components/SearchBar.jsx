import React from 'react'


class SearchBar extends React.Component {

    handleChange = (event) => {
        let inputName = event.target.value;
        this.props.searchByName(inputName)
    }
    render(){
    return (
        <div>
            <form>
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
