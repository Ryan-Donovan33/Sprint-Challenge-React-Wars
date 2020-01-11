import React from 'react';

const Card = (props) => {
	return (
		<div>
			<p>Name: {props.jedi.name}</p>
			<p>Height: {props.jedi.height}</p>
			<p>Mass: {props.jedi.mass}</p>
			<p>Hair Color: {props.jedi.hair_color}</p>
			<p>Skin Color: {props.jedi.skin_color}</p>
			<p>Eye Color: {props.jedi.eye_color}</p>
			<p>Birth Year: {props.jedi.birth_year}</p>
			<p>Gender: {props.jedi.gender}</p>
		</div>
	);
};

export default Card;
