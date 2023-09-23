const MovieDetails = ({ movieDetails }) => {
    const { title, overview, poster_path, vote_average } = movieDetails;

    return (
        <div>
            Movie Details
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <h2>{title}</h2>
            <p>{ vote_average}</p>
            <p>{overview}</p>
            {/* <ul>{genres.map(({ id, name }) => {
                return (
                    <li key={id}>{name}</li>
                )
            })}</ul> */}
       </div>
        
    )
}
export default MovieDetails