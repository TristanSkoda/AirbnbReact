import React from 'react';


export default class Experience extends React.Component {
	renderStars = stars => [...new Array(stars)].map((item, index) => <span key={index} className="fa fa-star checked"></span>)
	render() {
		const { image, activity, city, title, price, stars, rate } = this.props;
		return (
			<div className="experience">
				<div className="experience-img">
					<img src={image} alt="a female surfing" />
				</div>
				<div className="experience-text">
					<h5>{activity} ~ {city}</h5>
					<h3>{title}</h3>
					<h4>${price} CAD per person</h4>
					<div className="experience-rating">
						<div className="experience-stars">
							{this.renderStars(stars)}
						</div>
						<p>{rate}</p>
					</div>
				</div>
			</div>
		);
	}
}
