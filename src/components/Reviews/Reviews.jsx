import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "api";

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
                <ul> 
                    <h4>Reviews</h4>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
          </div>  
       ) : (<div>We don't have any reviews for this movie...</div>)
    )
}

export default Reviews