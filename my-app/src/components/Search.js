import React from 'react'

function Search({ searchBrewery, onSearchChange }) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search by Brewery Name"
                value={searchBrewery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search