import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TrendingMovies = ({ movies }) => {
     const location = useLocation();

    return (
        <ul>
            <h1>Trending today</h1>
            {
                movies.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`movies/${id}`} state={{ from: location }}>{title}</Link>
                        </li>
                    )
                })
            }
    </ul>
)
}

export default TrendingMovies;