import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Movie,
  Profile,
  SignIn,
  SignUp,
  Fof,
  AddMovie,
  UpdateMovie,
} from "../pages/Index";
import { fetchMovies } from "../api";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import "../styles/app.css";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();

      setMovies(movies);
    }
    getMovies();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home movies={movies} />} />
          <Route exact path="/movie/:id" element={<Movie />} />
          <Route exact path="/movie/add" element={<AddMovie />} />
          <Route
            exact
            path="/movie/update/:id"
            element={<UpdateMovie />}
          ></Route>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<Fof />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
