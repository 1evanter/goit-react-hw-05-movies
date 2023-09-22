import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org'
const API_KEY = 'da0b91f90e02f4caf38d6a44980d2829'

export const fetchMovies = async () => {
    const response = await axios.get(`3/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data.results;
};