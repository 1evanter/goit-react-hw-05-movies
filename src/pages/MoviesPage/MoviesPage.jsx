import Movies from "components/Movies"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchMovieSearch } from "api";
import toast from "react-hot-toast";
import { Loader } from "components/Loader";
const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState('');
     const [loading, setLoading] = useState(true);

    const query = searchParams.get('query') ?? '';

    useEffect(() => {

        async function getSearchMovies() {
            try {
                const movies = await fetchMovieSearch(query);

                  if (!movies.length) {
          toast.error('Sorry, nothing was found!', {
            duration: 2000,
          });
                };
                setSearchMovies(movies); 
                setLoading(false);
    } catch (error) {
        console.log(error)
            }
        }
        getSearchMovies();
    }, [query])

const getSearchQuery = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value;

    if (searchQuery.trim() === '') {
      toast.error('Fill in the search bar');
      return;
    }
    
    setSearchParams({ query: searchQuery });
    evt.target.reset();
  };

    return (
        <div>
            <form onSubmit={getSearchQuery}
                action="">
                <input type="text"
        name="query"
        placeholder="Movie"
                    required />
                <button type="submit">Submit</button>
            </form>
            {loading ? (<Loader/>) :
                (<Movies movies={searchMovies} />)}
        </div>
    )
}

export default MoviesPage