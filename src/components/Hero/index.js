import React from 'react';

import './styles.css';
import SearchLoop from '../../images/loopimage.png';

export default class Hero extends React.Component {

	doSomething = event => event.preventDefault(); 
	render() {
		const listCategories = ['All', 'Home', 'Experiences', 'Restaurants'];
		return (
			<div className="hero-container">
				<h1 className="title">Airbnb</h1>
				<h1>Book unique
                    <a href="">homes</a> and experiences
                    <br /> all over the world.</h1>
				<div className="search-container">
					<form onSubmit={this.doSomething}>
						<div className="search-bar">
							<img src={SearchLoop} alt="search" />
							<input type="text" placeholder="Try 'Montreal'" name="search" />
							<button type="submit">Search</button>
						</div>
						<div className="search-category-container">
							<h3>Explore Airbnb</h3>
							<div className="list-category">
								<ul>
									{listCategories.map(category => <li key={category}><button >{category}</button></li>)}
								</ul>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}