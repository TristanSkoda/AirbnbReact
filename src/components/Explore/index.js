import React from 'react';
import Option from './Option';

import './styles.css';
import ImageHome from '../../images/home.jpg';
import ImageKayak from '../../images/Kayak.JPG';
import ImageRestaurants from '../../images/restaurants.jpg';


export default class Explore extends React.Component {
	state = {
		options: [
			{
				image: ImageHome,
				name: "Homes"
			},
			{
				image: ImageKayak,
				name: "Experiences"
			},
			{
				image: ImageRestaurants,
				name: "Restaurants"
			}]
	};
	render() {
		return (
			<div className="explore-container">
				<div className="list-option">				
					{this.state.options.map(option => <Option key={option.name} {...option} />)}
				</div>
			</div>
		);
	}
}
