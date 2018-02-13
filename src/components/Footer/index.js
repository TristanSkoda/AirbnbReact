import React from 'react';

import './styles.css';

export default class Footer extends React.Component {
	state = {
		categories: [
			{
				title: "Airbnb",
				links: ["About us", "Careers", "Press", "Policies", "Help", "Diversity & Belonging"]
			},
			{
				title: "Discover",
				links: ["Trust & Safety", "Travel Credit", "Airbnb Citizen", "Business Travel", "GuideBooks", "Airbnbmag"]
			},
			{
				title: "Hosting",
				links: ["Why Host", "Hospitality", "Responsible Hosting", "Community Centre"]
			}
		],
		terms: ["Terms", "Privacy", "Site Map"]
	};

	renderLinks = array => array.map((item, index) => <li key={index}><a href="">{console.log(item)}{item}</a></li>);

	renderFooterText = categories => categories.map((category, index) =>
		<div className="footer-text-link" key={index}>
			<h3>{category.title}</h3>
			<ul>{this.renderLinks(category.links)}</ul>
		</div>
	);


	render() {
		return (
			<div className="footer-container">
				<div className="footer-top">
					<div className="currency-language">
						<div className="border">
							<p>language</p>
						</div>
						<div className="border">
							<p>currency</p>
						</div>
					</div>
					<div className="footer-texts-container">
						{this.renderFooterText(this.state.categories)}
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-bottom-left">
						<p>&copy Airbnb, Inc.</p>
					</div>
					<div className="footer-bottom-right">
						<ul>
							{this.renderLinks(this.state.terms)}
							<li>
								<a href="">
									<span class="fa fa-facebook"></span>
								</a>
							</li>
							<li>
								<a href="">
									<span class="fa fa-twitter"></span>
								</a>
							</li>
							<li>
								<a href="">
									<span class="fa fa-instagram"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}