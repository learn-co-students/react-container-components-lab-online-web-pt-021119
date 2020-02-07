import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  search = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${ URL }&query=${ this.state.searchTerm }`)
    .then(response => response.json())
    .then(json => this.setState({ reviews: json.results }))
  }

  render(){
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <div>
            <strong>Search for Movie Reviews</strong>
            <input type="text" name="search" id="search" onChange={ event => this.search(event) } value={ this.state.searchTerm }/>
          </div>
          <div>
            <button type="submit">Search!</button>
          </div>
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews moviesArr={ this.state.reviews }/>
        </div>
      </div>
    )
  }
}