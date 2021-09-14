import Header from "./components/Header"
import "./index.css";
import BreweryContainer from "./components/BreweryContainer";

function App() {
  return (
    <div className="ui raised segment">
      <Header />
      <BreweryContainer />
    </div>
  );
}

export default App;
