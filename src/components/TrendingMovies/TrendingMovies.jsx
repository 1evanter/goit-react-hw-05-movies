import { useLocation } from "react-router-dom";
import { List, Item, Image, StyledLink, Text, Title } from "./TrendingMovies.styled";

const TrendingMovies = ({ movies }) => {
     const location = useLocation();

    return (
        <div>
            <Title>Trending today</Title>
        <List>
            {
                movies.map(({id, title, poster_path}) => {
                    return (
                        <Item key={id}>
                            <StyledLink to={`movies/${id}`} state={{ from: location }}>
                                <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                                <Text>{title}</Text>
                                </StyledLink>
                        </Item>
                    )
                })
            }
    </List>
        </div>
)
}

export default TrendingMovies;