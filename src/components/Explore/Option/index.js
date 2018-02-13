import React from 'react';


export default class Option extends React.Component {
	render() {
		const {image, name} = this.props;	
		return ( 			
			<div className="option" >
				<div className="option-img">
					<img src={image} alt="" />
				</div>
				<div className="option-text">
					<h3>{name}</h3>
				</div>
			</div>
		);
	}
}

