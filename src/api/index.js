import axios from "axios";
import { API_URLS } from "../utils/constants";

export const fetchMovies = async () => {
  console.log("API_URLS.movies", API_URLS.movies);
  const response = await axios.get(API_URLS.movies());
  const data = response.data.movies;
  return data;
};
