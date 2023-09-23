import MovieDetails from "components/MovieDetails/MovieDetails";
import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "api";
import { Loader } from "components/Loader";
import { List, StyledLink } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);

useEffect(() => {
    if (!movieId) {
        return
    }

    async function getMoviesById() {
        try {
           
    const movie = await fetchMovieById(movieId);
            
        if (movie.id) {
            setLoading(false);
            setMovieDetails(movie);
            }
        
} catch (error) {
    console.log(error)
}        
    }
    
    getMoviesById();
}, [movieId])


    return (
loading ? (<Loader/>) : 
       ( <div>
            <MovieDetails movieDetails={movieDetails} />
            <List>
                <li><StyledLink to="cast">Cast</StyledLink></li>
                <li> <StyledLink to="reviews">Reviews</StyledLink></li>
            </List>

           <Suspense fallback={<Loader/>}>
                <Outlet/>
                </Suspense>
        </div>)
    )
}

export default MovieDetailsPage;