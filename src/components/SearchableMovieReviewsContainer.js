import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

//&query=<search-term>

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchUrl = URL+'&query='+this.state.searchTerm

    fetch(searchUrl)
    .then(r => r.json())
    .then(response => this.setState({
      reviews: response.results
    }))

  }

  render(){
    return (
    <div className="searchable-movie-reviews">
    <form onSubmit={this.handleSubmit}>
    <input name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
    <button type="submit">Search Reviews</button>
    </form>
    {this.state.reviews.length > 0 ? <h3>Movie Reviews Search Result</h3> : null}
    <MovieReviews reviews= {this.state.reviews} />
    </div>
    )
  }



}

export default SearchableMovieReviewsContainer;
