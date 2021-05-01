import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieCardClicked }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
          onMovieClicked={() => onMovieCardClicked(movie.imdbID)}
        />
      ))}
    </div>
  );
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
