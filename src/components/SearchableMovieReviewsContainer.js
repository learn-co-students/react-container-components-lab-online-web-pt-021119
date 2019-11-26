import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleSubmit = event => {
    event.preventDefault()
    const searchTerm = this.state.searchTerm
    fetch(URL)
      .then(response => response.json())
      .then(data =>
        this.setState({ reviews: data.results.filter(result => result.display_title.includes(searchTerm))
      }))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            name="searchTerm"
            size="50"
          />
          <button type="submit">Search</button>
        </form>
        <div className='searchable-movie-reviews-results'>
          <h3>Search Results</h3>
          <MovieReviews reviews={this.state.reviews} /><hr/>
        </div>
      </div>
    )
  }
}
