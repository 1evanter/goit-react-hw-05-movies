import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

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
