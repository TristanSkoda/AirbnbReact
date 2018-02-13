import React from 'react';

import './styles.css';
import ImageSurf from '../../images/surf.jpg';
import Experience from './Experience';


export default class Experiences extends React.Component {
	state = {
		experience: [
			{
				image: ImageSurf,
				activity: "yoga",
				city: "Tokyo",
				title: "best yoga",
				price: 27,
				stars: 5,
				rate: 344
			},
			{
				image: ImageSurf,
				activity: "dance",
				city: "Columbus",
				title: "best dance",
				price: 72,
				stars: 5,
				rate: 344
			},
			{
				image: ImageSurf,
				activity: "volleyball",
				city: "NY",
				title: "vollleyyeah",
				price: 52,
				stars: 5,
				rate: 344
			},
			{
				image: ImageSurf,
				activity: "karate",
				city: "vegas",
				title: "fightcash",
				price: 42,
				stars: 5,
				rate: 34
			},
			{
				image: ImageSurf,
				activity: "surf",
				city: "La",
				title: "hothot",
				price: 22,
				stars: 5,
				rate: 3444
			},
			{
				image: ImageSurf,
				activity: "cooking",
				city: "quebec",
				title: "poutin",
				price: 22,
				stars: 5,
				rate: 34
			},
			{
				image: ImageSurf,
				activity: "dance",
				city: "laval",
				title: "love love",
				price: 22,
				stars: 5,
				rate: 44
			},
			{
				image: ImageSurf,
				activity: "eating",
				city: "montreal",
				title: "cook cook",
				price: 22,
				stars: 5,
				rate: 39
			}]

	};
	render() {
		return (
			<div >
				<div className="experiences-container">
					<h2>Experiences</h2>
					<div className="list-experiences">
						{this.state.experience.map((experience, index) => <Experience key={index} {...experience} />)}
					</div>
				</div>
			</div>
		);
	}
}