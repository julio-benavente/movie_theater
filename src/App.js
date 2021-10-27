import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/global/Navbar/Navbar";
import Footer from "./components/global/Footer/Footer";

// Pages
import HomePage from "./components/HomePage/HomePage";
import ByGenrePage from "./components/ByGenrePage/ByGenrePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/by_genre" component={ByGenrePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
