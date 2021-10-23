import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/global/Navbar/Navbar";

// Pages
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
