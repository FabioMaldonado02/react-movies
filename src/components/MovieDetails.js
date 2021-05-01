import PropsTypes from "prop-types";

const MovieDetails = (props) => {
  return (
    <div>
      <section>
        <img src={props.posterUrl} alt={`Poster for ${props.title}`} />
      </section>
      <section>
        <div>
          <p>{props.title}</p>
          <p>{props.rating}</p>
        </div>
        <div>
          <span>{props.rated}</span>
          <span>{props.runtime}</span>
          <span>{props.genre}</span>
        </div>
        <div>
          <p>Plot:</p>
          <p>{props.plot}</p>
        </div>
        <div>
          <p>Actors:</p>
          <p>{props.actors}</p>
        </div>
      </section>
    </div>
  );
};

MovieDetails.propTypes = {
  posterUrl: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  rating: PropsTypes.number.isRequired,
  rated: PropsTypes.string.isRequired,
  runtime: PropsTypes.number.isRequired,
  genre: PropsTypes.string.isRequired,
  plot: PropsTypes.string.isRequired,
  actors: PropsTypes.string.isRequired,
};

MovieDetails.defaultProps = {
  rating: 0,
  rated: "N/A",
  genre: "N/A",
  plot: "N/A",
  actors: "N/A",
};
export default MovieDetails;
