import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ width: "20%" }} key={movie.id}>
      {movie ? (
        <CardMedia
          sx={{ height: "300px" }}
          image={
            movie ? (
              movie.thumbnail
            ) : (
              <Skeleton width={210} height={118}></Skeleton>
            )
          }
          title={movie.title}
        ></CardMedia>
      ) : (
        <Skeleton width={210} height={118}></Skeleton>
      )}
      <CardContent>
        <Link to={`/movie/${movie._id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {movie ? (
              movie.title
            ) : (
              <Skeleton width={210} height={16}></Skeleton>
            )}
          </Typography>
        </Link>
        <Rating name="size-medium" defaultValue={movie.rating} readOnly />
      </CardContent>
    </Card>
  );
}
