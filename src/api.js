import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org'
const API_KEY = 'da0b91f90e02f4caf38d6a44980d2829'

const fetchMovies = async () => {
    const response = await axios.get(`3/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}

const fetchMovieById = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

const fetchMovieCast = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
}

const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
}

const fetchMovieSearch = async query => {
    const response = await axios.get(`/3/search/movie?query=${query}&api_key=${API_KEY}`)
    return response.data;
};

export {fetchMovies, fetchMovieById, fetchMovieCast, fetchMovieReviews, fetchMovieSearch}