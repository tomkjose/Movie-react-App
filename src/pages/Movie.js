import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api";
import Rating from "@mui/material/Rating";
import SwipeableTextMobileStepper from "../component/SwipeableTextMobileStepper";
import "../styles/movie.css";
import { CarouselTransition } from "../component/CarouselTransition";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function handleMovieDetails() {
      const response = await fetchMovieDetails(id);
      const movie = response.movie;

      setMovie(movie);
    }
    handleMovieDetails();
  }, []);
  console.log("movie.image", movie.image);
  return (
    <div className="Movie">
      <div className="main">
        <div className="header">
          <h2 className="title">{movie.title}</h2>
          <Rating name="size-large" defaultValue={movie.rating} size="large" />
        </div>
        <div className="images">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            style={{ width: "10rem" }}
          />
          <div className="text">
            <div className="category">{movie.category}</div>
            <div className="description">{movie.description}</div>
          </div>
        </div>
        <h3>Gallery</h3>
        {/* <SwipeableTextMobileStepper image={movie.image} /> */}
        <CarouselTransition image={movie.image} />
      </div>
    </div>
  );
}

export default Movie;
