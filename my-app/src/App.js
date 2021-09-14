import { useState, useEffect } from 'react'

function App() {
  const [ getBeer, setGetBeer ] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json")
    .then(response => response.json())
    .then(getbeerArr => setGetBeer(getbeerArr))
  }, [])

  const

  return (
    <div className="App">
      <h1>Find your Brewery!</h1>
      {displayNewArray}
    </div>
  );
}

export default App;
