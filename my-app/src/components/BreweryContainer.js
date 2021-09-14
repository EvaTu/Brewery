import React, { useState, useEffect }from 'react'
import Search from "./Search"
import BreweryForm from "./BreweryForm"
import BreweryList from "./BreweryList"

function BreweryContainer() {
    const [ getBreweries, setGetBreweries] = useState([])

    //Ask Michelle about previous API for more options
    //Async Await
    // https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json

    // use for loop to render # length of items
    // conditional rendering if fetch is taking a long time to render then loading screen 

    useEffect(() => {
        fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
        .then(response => response.json())
        .then(breweryArray => setGetBreweries(breweryArray))
        }, [])

    return (
        <div>
            <Search /> 
            <BreweryForm />
            <BreweryList breweriesArray={getBreweries} />
        </div>
    )
}

export default BreweryContainer