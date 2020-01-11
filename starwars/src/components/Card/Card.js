import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	align-items: center;
	margin: 3%;
	background-color: #fec196;
`;

const Name = styled.h1`font-size: 1.2rem;`;

const Card = (props) => {
	return (
		<CardWrapper>
			<Name>Name: {props.jedi.name}</Name>
			<p>Height: {props.jedi.height}</p>
			<p>Mass: {props.jedi.mass}</p>
			<p>Hair Color: {props.jedi.hair_color}</p>
			<p>Skin Color: {props.jedi.skin_color}</p>
			<p>Eye Color: {props.jedi.eye_color}</p>
			<p>Birth Year: {props.jedi.birth_year}</p>
		</CardWrapper>
	);
};

export default Card;
