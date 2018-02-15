import React from 'react';

import './styles.css';
import './hamburger.css';
import Logo from '../../images/airbnb_logo.jpg';

export default class Header extends React.Component {

	state = {
		burgerIsOpen: false
	};

	myBurger = () => {
		if (this.state.burgerIsOpen === false) {
			this.setState({ burgerIsOpen: true });
		} else {
			this.setState({ burgerIsOpen: false });
		}
	};
 
	// ajoute la classe responsive si la classname est juste topnav
   
	/*event = document.getElementById("myTopnav");
	if (event.className === "topnav") {
		 event.className += " responsive";
	} else {
		 event.className = "topnav";
	}
	)*/


	render() {
		const {burgerIsOpen} = this.state;		
		return (
			<div>
				<img className="logo" src={Logo} alt="logo de Airbnb" />
				<div className={burgerIsOpen ?'topnav responsive' : 'topnav'} id="myTopnav">
					<a href="">Become host</a>
					<a href="">Help</a>
					<a href="">Sign Up</a>
					<a href="">Log In</a>
					<div className={burgerIsOpen ? 'hamburger-container  change' : 'hamburger-container'} onClick={this.myBurger}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				</div>
			</div>
		);
	}
}