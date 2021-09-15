import React from 'react'
import BreweryContainer from "./BreweryContainer"

function Home({ getBreweries, setGetBreweries }) {
    return (
        <section id="home">
            <BreweryContainer getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </section>
    );
}

export default Home