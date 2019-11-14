import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'pecebTnUEcJOnDpolmCQLmVHS86RmdL4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSearchInputChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(data => this.setState({moviesList: data.results}) )
  }

  render(){
    return(
    <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
       <label htmlFor="search-input">Search Movie Reviews</label>
       <input
         id="search-input"
         type="text"
         style={{ width: 300 }}
         onChange={this.handleSearchInputChange}
       />
       <button type="submit">Submit</button>
     </form>
        <MovieReviews reviews={this.state.reviews} />
    </div>
    )
  }

}
