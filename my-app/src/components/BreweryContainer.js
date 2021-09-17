import React, { useState } from 'react'
import Search from "./Search"
import BreweryList from "./BreweryList"

function BreweryContainer({ getBreweries }) {
    const [ searchBrewery, setSearchBrewery ] = useState("")

    const displayBreweries = getBreweries.filter((brewery => {
        return brewery.name.toLowerCase().includes(searchBrewery.toLowerCase())
    }))

    return (
        <div className="BreweryContainer">
            <Search searchBrewery={searchBrewery} onSearchChange={setSearchBrewery}/> 
            <BreweryList breweriesArray={displayBreweries} />
        </div>
    )
}

export default BreweryContainer