import Header from "./components/Header"
import BreweryContainer from "./components/BreweryContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Find your Favorite Brewery</h2>
      </div>
      <Header />
      <BreweryContainer />
    </div>
  );
}

export default App;
