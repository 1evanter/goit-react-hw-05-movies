import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import MoviesPage from "pages/MoviesPage";
import Reviews from "./Reviews";
import Cast from "./Cast";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
         
 );
};
