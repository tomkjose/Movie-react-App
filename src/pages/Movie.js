import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, userRating } from "../api";
import Rating from "@mui/material/Rating";
import "../styles/movie.css";
import CarouselTransition from "../component/CarouselTransition";
import { useAuth } from "../provider/AuthProvider";
import Loading from "../component/Loading";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleRating = async (e) => {
    const newRating = e.target.value;
    setRating(newRating);
    setMovie({ ...movie, rating: newRating });
    userRating(id, newRating);
  };

  useEffect(() => {
    async function handleMovieDetails() {
      setLoading(true);
      const response = await fetchMovieDetails(id);
      const movie = response.movie;
      setMovie(movie);
      setLoading(false);
    }
    handleMovieDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="Movie" style={{ color: "white" }}>
      {movie ? (
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
              className="thumbnail"
            />
            <div className="text">
              <div className="category">{movie.category}</div>
              <div className="description">{movie.description}</div>
            </div>
          </div>
          <h3 className="gallery">Gallery</h3>
          <CarouselTransition image={movie.image} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Movie;
