import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const MovieDetails = ({ movieDetails }) => {
    const { title, overview, poster_path, vote_average, genres } = movieDetails;

     const location = useLocation();
 const backLinkLocationRef = useRef(location.state?.from ?? '/');
    
    return (
        <div>
            <Link to={backLinkLocationRef.current}>Go back</Link>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <h2>{title}</h2>
            <p>User score: {Math.round(vote_average * 100) / 100}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <ul>
                <h3>Genres: </h3>
                { genres.map(({id, name}) => 
                    <li key={id}> {name}</li>
            )}</ul>
       </div>
    )
}
export default MovieDetails