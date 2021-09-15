import React from 'react'
import BreweryContainer from "./BreweryContainer"

function Home({ getBreweries, setGetBreweries }) {
    return (
        <section id="home">
            <h2>Home</h2>
            <BreweryContainer getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </section>
    );
}

export default Home