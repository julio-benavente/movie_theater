import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/global/Navbar/Navbar";
import Footer from "./components/global/Footer/Footer";

// Pages
import HomePage from "./components/HomePage/HomePage";
import ByGenrePage from "./components/ByGenrePage/ByGenrePage";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/by_genre" component={ByGenrePage} />
        <Route path="/movies" component={MoviePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
