import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './LibrarySection.css';

const GET_MOVIES = "http://localhost:3000/movies"

class LibrarySection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.props.changeStatusCallback('loading', 'waiting...')
    axios.get(GET_MOVIES)
    .then((response) => {
      this.setState({
        movies: response.data
      });
      this.props.changeStatusCallback('success', `Successfully loaded ${this.state.movies.length} movies`);
    })
    .catch((error) => {
      this.props.changeStatusCallback('error', `${error.response.status}: ${error.response.statusText}`);
    });
  }

  render() {

    const { movies } = this.state;
    const sortedMovies = movies.sort(function (a, b) {
      return ('' + a.title).localeCompare(b.title);
    })

    const allMovies = sortedMovies.map((movie, i) => {

      return (<Movie
        key={i}
        title={movie.title}
        releaseDate={movie.release_date}
        imageURL={movie.image_url}
        selectMovieCallback={() => this.props.selectMovieCallback(movie)}
        buttonText={"Select"}
        currentSelected={this.props.currentSelected}
        />)
      });

      return (
        <div className="library-section">
          {allMovies}
        </div>
      )
    }
  }

  LibrarySection.propTypes = {
    changeStatusCallback: PropTypes.func,
    selectMovieCallback: PropTypes.func,
    currentSelected: PropTypes.string,
  }

  export default LibrarySection;
