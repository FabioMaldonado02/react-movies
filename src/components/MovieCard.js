const MovieCard = ({ title, type, posterUrl, onMovieClicke }) => {
  return (
    <div
      style={{ display: "inline-block", border: "1px solid", margin: "15px" }}
      onClick={onMovieClicke}
    >
      <section>
        <img src={posterUrl} alt={`${title} poster`} />
      </section>
      <section>
        <p>{title}</p>
        <div>
          <span>{type}</span>
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
