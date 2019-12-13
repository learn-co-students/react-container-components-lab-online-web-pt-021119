import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
      searchTerm: '',
      reviews: []
    };
    handleSearchInputChange = event =>  this.setState({ searchTerm: event.target.value });


    handleSubmit = event => {
        event.preventDefault();
    
        fetch(URL.concat(this.state.searchTerm))
          .then(res => res.json())
          .then(res => this.setState({ reviews: res.results }));
      };

    render() {
        return (<div className="searchable-movie-reviews"> 
        <form onSubmit={this.handleSubmit}>
          <label> Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>

          <MovieReviews reviews={this.state.reviews} />

        
        </form>
        </div>);
    }
}


export default SearchableMovieReviewsContainer;