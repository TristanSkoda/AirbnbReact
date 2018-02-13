import React from 'react';

import './styles.css';
import './hamburger.css';
import Logo from '../../images/airbnb_logo.jpg';

export default class Header extends React.Component{

    /*myBurger(event) {
        event.classList.toggle("change");
  
        // ajoute la classe responsive si la classname est juste topnav
        event = document.getElementById("myTopnav");
        if (event.className === "topnav") {
            event.className += " responsive";
        } else {
            event.className = "topnav";
        }
      
    }*/
    render(){
        return (
            <div>
                <img className="logo" src={Logo} alt="logo de Airbnb" />
                <div className="topnav" id="myTopnav">
                    <a href="">Become host</a>
                    <a href="">Help</a>
                    <a href="">Sign Up</a>
                    <a href="">Log In</a>
                    <div className="hamburger-container" /*onClick={this.myBurguer.bind(this)}*/>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        );
    }
}