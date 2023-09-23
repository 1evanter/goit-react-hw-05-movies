import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { StyledLink, Wrapper, Image, DescrBox, Title, List } from "./MovieDetails.styled";

const MovieDetails = ({ movieDetails }) => {
    const { title, overview, poster_path, vote_average, genres } = movieDetails;

     const location = useLocation();
 const backLinkLocationRef = useRef(location.state?.from ?? '/');
    
    return (
        <div>
                 <StyledLink to={backLinkLocationRef.current}> {"<-- Go back"}</StyledLink>
        <Wrapper>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <DescrBox>
            <Title>{title}</Title>
            <p>User score: {Math.ceil(vote_average)}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <List>
                <h3>Genres: </h3>
                { genres.map(({id, name}) => 
                    <li key={id}> {name}</li>
            )}</List>
            </DescrBox>
       </Wrapper>
        </div>
   
    )
}
export default MovieDetails