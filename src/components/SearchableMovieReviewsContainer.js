import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
	
	state = {
		reviews:[],
		searchTerm:''
	}

	render(){
		return (
			<div className='searchable-movie-reviews'>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type='text' onChange={event => this.handleChange(event)}/>
					<button type='submit'>Submit</button>
				</form>
				<MovieReviews movieReviews={this.state.reviews}/>
			</div>
		)

	}

	handleChange = event => {
		this.setState({searchTerm: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(URL + `&query=${this.state.searchTerm}`).then(response => response.json())
		.then(data => (
			this.setState({reviews: data.results})
		))
	}

}
