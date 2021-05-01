import React from "react";
import Modal from "./Modal";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { getMovieDetailsById, getMoviesByName } from "../utils/utils";
import SearchBar from "./SearchBar";
import Paginator from "./Paginator";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: "batman",
      type: "",
      isLoading: false,
      error: true,
      showModal: false,
      selectedMovieId: null,
      selectedMovie: null,
      page: 1,
    };

    this.updateShowModalState = this.updateShowModalState.bind(this);
    this.onMovieClicked = this.onMovieClicked.bind(this);
    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    setTimeout(async () => {
      try {
        const movies = await getMoviesByName(this.state.search);
        this.setState({
          movies,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        this.setState({
          movies: [],
          error,
          isLoading: false,
        });
      }
    }, 5000);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedMovieId !== this.state.selectedMovieId) {
      try {
        const newMovie = await getMovieDetailsById(this.state.selectedMovieId);
        this.setState({
          selectedMovie: newMovie,
          showModal: true,
        });
      } catch (error) {
        this.setState({
          error: error,
          showModal: false,
        });
      }
    }

    if (
      prevState.search !== this.state.search ||
      prevState.type !== this.state.type ||
      prevState.page !== this.state.page
    ) {
      try {
        const newMovies = await getMoviesByName(
          this.state.search,
          this.state.type,
          this.state.page
        );
        this.setState({
          movies: newMovies,
          error: null,
        });
      } catch (error) {
        this.setState({
          error: error,
          movies: [],
        });
      }
    }
  }

  updateShowModalState(shouldShow) {
    this.setState({
      showModal: shouldShow,
    });
  }

  onMovieClicked(id) {
    this.setState({
      selectedMovieId: id,
    });
  }

  onSearchFormSubmit(search, type) {
    this.setState({
      search,
      type,
    });

    console.log(search, type);
  }

  updatePage(ammount) {
    this.setState((prevState) => {
      const newPage = prevState.page + ammount;

      if (newPage > 0 && newPage < 101) {
        return { page: newPage };
      }

      return { page: prevState.page };
    });
  }

  render() {
    const { selectedMovie } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.onSearchFormSubmit} />
        {this.state.isLoading && <p>Loading...</p>}
        <MovieList
          movies={this.state.movies}
          onMovieCardClicked={this.onMovieClicked}
        />
        <Paginator
          currentPage={this.state.page}
          getNextPage={() => this.updatePage(1)}
          getPrevPage={() => this.updatePage(-1)}
        />
        {this.state.showModal && (
          <Modal
            show={this.state.showModal}
            onClose={() => this.updateShowModalState(false)}
          >
            <MovieDetails
              posterUrl={selectedMovie.Poster}
              title={selectedMovie.Title}
              rating={selectedMovie.Ratings[0].Value}
              rated={selectedMovie.Rated}
              runtime={selectedMovie.Runtime}
              genre={selectedMovie.Genre}
              plot={selectedMovie.Plot}
              actors={selectedMovie.Actors}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
