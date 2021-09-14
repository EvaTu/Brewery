import Header from "./components/Header"
import "./index.css";
import BreweryContainer from "./components/BreweryContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2 className="title">Find your Favorite Brewery</h2>
      </div>
      <Header />
      <BreweryContainer />
    </div>
  );
}

export default App;
