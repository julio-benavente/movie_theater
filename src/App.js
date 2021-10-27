import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/global/Navbar/Navbar";
import Footer from "./components/global/Footer/Footer";

// Pages
import HomePage from "./components/HomePage/HomePage";
import ByGenrePage from "./components/ByGenrePage/ByGenrePage";
import MoviePage from "./components/MoviePage/MoviePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/by_genre" component={ByGenrePage} />
        <Route path="/movies" component={MoviePage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
