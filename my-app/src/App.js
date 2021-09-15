import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Pending from "./components/Pending"
import "./index.css";

function App() {
  const [ getBreweries, setGetBreweries] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/breweries")
    .then(response => response.json())
    .then(breweryArray => setGetBreweries(breweryArray))
    }, [])

  return (
    <div >
      <NavBar />
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route exact path="/submit">
            <Pending getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </Route>
        <Route exact path="/home">
            <Home getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
