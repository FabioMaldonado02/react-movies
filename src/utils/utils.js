const OMDB_API_BASE_URL = "https://www.omdbapi.com/";
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesByName = async (search, type = "movie", page = 1) => {
  const url = `${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&s=${search}&type=${type}&page=${page}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.Search;
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getMovieDetailsById = async (movieId) => {
  const url = `${OMDB_API_BASE_URL}?apikey=${OMDB_API_KEY}&i=${movieId}`;

  try {
    const res = await fetch(url);
    const movie = await res.json();
    return movie;
  } catch (error) {
    console.log(error);
  }

  return null;
};
