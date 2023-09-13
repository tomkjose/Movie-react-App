import axios from "axios";
import { API_URLS } from "../utils/constants";

export const fetchMovies = async () => {
  console.log("API_URLS.movies", API_URLS.movies);
  const response = await axios.get(API_URLS.movies());
  const data = response.data.movies;
  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(API_URLS.fetchMovie(id));
  const data = response.data;
  console.log("data", data);
  return data;
};

export const userLogin = async (email, password) => {
  const response = await axios.post(API_URLS.login(), { email, password });
  const token = response.data;
  if (!token) {
    return null;
  }
  localStorage.setItem("LOCAL_STORAGE_TOKEN", token.token);
  return token;
};

export const userSignup = async (username, email, password) => {
  const response = await axios.post(API_URLS.signup(), {
    username,
    email,
    password,
  });
  return response.data;
};

export const userDetails = async (id) => {
  const response = await axios.get(API_URLS.getuserDetails(id));
  const user = response.data.user;
  if (!user) {
    return null;
  }
  return user;
};
