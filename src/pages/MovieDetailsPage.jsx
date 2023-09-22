import MovieDetails from "components/MovieDetails";
import { Outlet, Link } from "react-router-dom";

const MovieDetailsPage = () => {
    return (

        <div>
           <MovieDetails/>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
   </ul>
            <Outlet/>
        </div>
    )
}

export default MovieDetailsPage;