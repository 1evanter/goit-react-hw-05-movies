import { Link, useLocation } from "react-router-dom";

const Movies = ({movies}) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {movies && movies.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
      </div>
    )
}

export default Movies;