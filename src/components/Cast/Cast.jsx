import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "api";
import { List, Item, Text, Image } from "./Cast.styled";

const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"

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
    
                 setCast(movieCast);
          
       
    } catch (error) {
        console.log(error)
    }
    }
    getMovieCast();
}, [ movieId])


    return (
        <div>
            <List> 
                {cast.map(({ id, name, profile_path, character }) => (<Item key={id}>
                    <Image src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImage} alt={name} />
                    <Text>
                        <b>{name}</b>
                        <p>Character: {character}</p>
                    </Text>
                    </Item>)
                
                )}
            </List>
        </div>
    )
}

export default Cast