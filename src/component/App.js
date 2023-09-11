import { HashRouter as Router, Routes, Route, Form } from "react-router-dom";
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
          <Route exact path="/" element={<Home movies={movies} />}></Route>
          <Route exact path="/movie/:id" element={<Movie />}></Route>
          <Route exact path="/movie/add" element={<AddMovie />}></Route>
          <Route
            exact
            path="/movie/update/:id"
            element={<UpdateMovie />}
          ></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/sign" element={<SignUp />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
