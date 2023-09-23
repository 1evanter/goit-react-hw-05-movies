const MovieDetails = ({ movieDetails }) => {
    const { title, overview, poster_path, vote_average, genres } = movieDetails;

    return (
        <div>
            
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <h2>{title}</h2>
            <p>{vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <ul>
                <h3>Genres: </h3>
                {genres.map(el => 
                    <li key={el.id}> {el.name}</li>
            )}</ul>
       </div>
    )
}
export default MovieDetails