import React from 'react'

function Search({ searchBrewery, onSearchChange }) {
    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Search Brewery"
                value={searchBrewery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search