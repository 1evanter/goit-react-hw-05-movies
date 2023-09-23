import Movies from "components/Movies/Movies"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchMovieSearch } from "api";
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader";
import { Form, Input, Button } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMovies, setSearchMovies] = useState('');
     const [loading, setLoading] = useState(true);

    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (!query) {
            setLoading(false)
      return setSearchMovies([]);
    }
     
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
        const nextParams = searchQuery !== "" ? { query: searchQuery } : {};
        setSearchParams(nextParams);
    
    setSearchParams({ query: searchQuery });
    evt.target.reset();
  };

    return (
        <div>
            <Form onSubmit={getSearchQuery}
                action="">
                <Input type="text"
        name="query"
        placeholder="Search movie"
                    />
                <Button type="submit">Search</Button>
            </Form>
            {loading ? (<Loader/>) :
                (<Movies movies={searchMovies} />)}
                <Toaster/>
        </div>
    )
}

export default MoviesPage