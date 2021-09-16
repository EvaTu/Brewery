import React from "react";
import BreweryForm from "./BreweryForm"

function Submit({ getBreweries, setGetBreweries }) {


    function handleAddBrewery(newBrewery) {
        const updatedBreweryArray = [...getBreweries, newBrewery]
        setGetBreweries(updatedBreweryArray)
    }

    return (
        <div id="submit-form">
            <h1>
                Submit a Brewery in New York!
            </h1>
            <BreweryForm onAddBrewery={handleAddBrewery}/>
        </div>
    );
}

export default Submit;
