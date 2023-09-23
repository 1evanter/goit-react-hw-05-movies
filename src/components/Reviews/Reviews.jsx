import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "api";
import { List, Text, TextContent } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

useEffect(() => {

    async function getMovieReviews() {
    try {
        const movieReviews = await fetchMovieReviews(movieId);
        if (movieReviews.length) {
            setReviews(movieReviews);
    }
    } catch (error) {
        console.log(error)
        }
    }
    
    getMovieReviews();
}, [movieId])

    return (
        reviews.length > 0 ? (
            <div>
                <List>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <Text>Author: {author}</Text>
                            <TextContent>"{content}"</TextContent>
                        </li>
                    ))}
                </List>
          </div>  
       ) : (<div>We don't have any reviews for this movie...</div>)
    )
}

export default Reviews