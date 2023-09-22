import { useState, useEffect } from "react";
import { fetchMovies } from "api";
import TrendingMovies from "components/TrendingMovies";

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function getTrendingMovies() {
            try {
                setLoading(true);
                const movies = await fetchMovies();
                setTrendingMovies(movies);
            } catch (error) {
                console.log(error)
            }
         finally {
                 setLoading(false);
            }
        }
    
        getTrendingMovies();
    }, []);

    return (
        
            loading ? (
          <div>LOADING...</div>
      ) : (<TrendingMovies movies={trendingMovies} />)   
    )
    }

export default HomePage;