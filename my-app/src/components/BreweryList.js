import React from 'react'
import Brewery from "./Brewery"

function BreweryList({ breweriesArray }) {

    const breweriesCompenents = breweriesArray.map(brewery => <Brewery breweriesObject={brewery} key={brewery.id}/>)

    return (
        <ul className="cards" >
            {breweriesCompenents}
        </ul>
    );
}

export default BreweryList;
