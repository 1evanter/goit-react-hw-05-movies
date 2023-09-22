import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <ul>Movies list
            <li>
            <Link to="movies/:movieId">movie 1</Link>
            </li>
            <li>
            <Link to="movies/:movieId">movie 2</Link>
            </li>
            <li>
            <Link to="movies/:movieId">movie 3</Link>
            </li>     
        </ul>
    )
}

export default HomePage;