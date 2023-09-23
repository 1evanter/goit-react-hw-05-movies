import { useLocation } from "react-router-dom";
import { List, Item, Image, Text, StyledLink } from './Movies.styled'

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"

const Movies = ({movies}) => {
    const location = useLocation();

    return (
        <div>
            <List>
                {movies && movies.map(({id, title, poster_path}) => {
                    return (
                        <Item key={id}>
                            <StyledLink to={`${id}`} state={{ from: location }}>
                               <Image src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImage} alt={title} />
                                <Text>{title}</Text>
                                </StyledLink>
                        </Item>
                    )
                })}
            </List>
      </div>
    )
}

export default Movies;