import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
constructor() {
  super();

this.state = {
  reviews: [],
  searchTerm: null
}
}

handleSubmit(e) {
  this.setState({searchTerm: e.target.value});
  this.searchMovies();
  e.preventDefault();
}

searchMovies = () => {
  fetch(URL + this.state.searchTerm + '&api-key=' + NYT_API_KEY)
  .then(res => res.json())
  .then(reviews => this.setState({reviews: reviews.results}))
}

render() {
  return(
<div className="searchable-movie-reviews">
<form onSubmit={this.handleSubmit}>
<input type="text" value={this.state.searchTerm} />
<input type="submit" value="Search"/>
</form>
<MovieReviews reviews={this.state.reviews} />
</div>

  )
}

}

export default SearchableMovieReviewsContainer
