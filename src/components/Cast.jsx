import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "api";

const Cast = () => {

    const { movieId } = useParams();
    const [cast, setCast] = useState([])

useEffect(() => {
    if (!movieId) {
     return
    }
    
    async function getMovieCast() {
        try {
            const movieCast = await fetchMovieCast(movieId);
    
                 setCast(movieCast.cast);
          
       
    } catch (error) {
        console.log(error)
    }
    }
    getMovieCast();
}, [ movieId])


    return (
        <div>Cast
            <ul>
                {cast.map(({ id, name, profile_path, character }) => (<li key={id}>
                    {profile_path ? (<img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />) : (<div>ААААААА ФОТКИ НЕМА</div>)}
                    
                    <div>
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </div>
                    </li>)
                
                )}
            </ul>
        </div>
    )
}

export default Cast