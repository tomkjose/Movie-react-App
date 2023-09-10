import React from "react";
import MovieCard from "../component/MovieCard";
import "../styles/home.css";

function Home({ movies }) {
  return (
    <div className="home">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
