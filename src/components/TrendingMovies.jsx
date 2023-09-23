import { Link } from "react-router-dom";

const TrendingMovies = ({movies}) => {
    return (
        <ul>
            {
                movies.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`movies/${id}`}>{title}</Link>
                        </li>
                    )
                })
            }
    </ul>
)
}

export default TrendingMovies;