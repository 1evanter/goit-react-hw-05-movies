import MovieDetails from "components/MovieDetails";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "api";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})

useEffect(() => {
    if (!movieId) {
        return
    }

    async function getMoviesById() {
        try {
    const movie = await fetchMovieById(movieId);
console.log(movie)
            
        if (movie.id) {
            setMovieDetails(movie)
            }
        
} catch (error) {
    console.log(error)
}        
    }
    
    getMoviesById();
}, [movieId])

    return (

        <div>
            <MovieDetails movieDetails={movieDetails} />
            <Outlet/>
        </div>
    )
}

export default MovieDetailsPage;