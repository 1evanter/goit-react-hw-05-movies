import MovieDetails from "components/MovieDetails";
import { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
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
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li> <Link to="reviews">Reviews</Link></li>
            </ul>

            <Outlet/>
        </div>
    )
}

export default MovieDetailsPage;