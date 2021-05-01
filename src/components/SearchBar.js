import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "movie",
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.search, this.state.type);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={this.state.search}
          onChange={(event) => this.setState({ search: event.target.value })}
        />
        <select
          value={this.state.type}
          onChange={(event) => this.setState({ type: event.target.value })}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
