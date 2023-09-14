const API_ROOT = "https://movie-api-uu2m.onrender.com/api/v1";

export const API_URLS = {
  login: () => `${API_ROOT}/users/signin`,
  signup: () => `${API_ROOT}/users/signup`,
  userUpdate: (id) => `${API_ROOT}/users/update/${id}`,
  getuserDetails: (id) => `${API_ROOT}/users/${id}`,
  movies: () => `${API_ROOT}/movies`,
  addMovie: () => `${API_ROOT}/movies`,
  fetchMovie: (id) => `${API_ROOT}/movies/movie/${id}`,
  // deleteMovie: (id) => `${API_ROOT}/movies/${id}`,
  // updateMovie: (id) => `${API_ROOT}/movies/${id}`,
  rateMovie: (id) => `${API_ROOT}/movies/rating/${id}`,
};
