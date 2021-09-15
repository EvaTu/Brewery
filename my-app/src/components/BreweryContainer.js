import React, { useState } from 'react'
import Search from "./Search"
import BreweryList from "./BreweryList"

function BreweryContainer({ getBreweries, setGetBreweries }) {
    const [ searchBrewery, setSearchBrewery ] = useState("")

    //Ask Michelle about previous API for more options
    //Async Await
    // https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json

    // use for loop to render # length of items
    // conditional rendering if fetch is taking a long time to render then loading screen 

    // json-server --watch db.json

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