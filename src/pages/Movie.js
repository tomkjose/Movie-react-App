import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, userRating } from "../api";
import Rating from "@mui/material/Rating";
import "../styles/movie.css";
import { CarouselTransition } from "../component/CarouselTransition";
import { useAuth } from "../provider/AuthProvider";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const handleRating = async (e) => {
    const newRating = e.target.value;
    setRating(newRating);
    setMovie({ ...movie, rating: newRating });
    userRating(id, newRating);
  };
  const { user } = useAuth;
  useEffect(() => {
    async function handleMovieDetails() {
      const response = await fetchMovieDetails(id);
      const movie = response.movie;

      setMovie(movie);
    }
    handleMovieDetails();
  }, []);
  console.log("rating in page", movie?.rating);
  if (!movie) return null;
  return (
    <div className="Movie" style={{ color: "white" }}>
      <div className="main">
        <div className="header">
          <h2 className="title">{movie.title}</h2>
          {user ? (
            <Rating
              name="rating"
              value={movie.rating}
              size="large"
              onChange={handleRating}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#faaf00",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#faaf00",
                },
              }}
            />
          ) : (
            <Rating
              name="rating"
              value={movie.rating}
              size="large"
              readOnly
              onChange={handleRating}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#faaf00",
                },
                "& .MuiRating-iconEmpty": {
                  color: "#faaf00",
                },
              }}
            />
          )}
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
        <CarouselTransition image={movie.image} />
      </div>
    </div>
  );
}

export default Movie;
