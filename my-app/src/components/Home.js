import React from "react";
import BreweryContainer from "./components/BreweryContainer";

function Home({ getBreweries, setGetBreweries }) {
    
    return (
        <div>
            <BreweryContainer getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </div>
    )
}

export default Home;
