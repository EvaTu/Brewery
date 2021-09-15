import React from "react"
import NavBar from "./components/NavBar"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Pending from "./components/Pending"
import "./index.css";

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pending">
          <Pending />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
