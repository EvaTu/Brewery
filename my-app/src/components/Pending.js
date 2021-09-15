import React from "react";
import BreweryForm from "./BreweryForm"

function Pending({ getBreweries, setGetBreweries }) {


    function handleAddBrewery(newBrewery) {
        const updatedBreweryArray = [...getBreweries, newBrewery]
        setGetBreweries(updatedBreweryArray)
    }

    return (
        <div id="home">
            <h1 style={{ color: "firebrick" }}>
                Submit a Brewery
            </h1>
            <BreweryForm onAddBrewery={handleAddBrewery}/>
        </div>
    );
}

export default Pending;
