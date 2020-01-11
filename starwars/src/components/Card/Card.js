import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	align-items: center;
	margin: 3%;
	background-color: #fec196;
`;

const Name = styled.h1`
	width: auto;
	font-size: 1.5rem;
	padding: 1%;
	color: ;
`;

const Details = styled.p`
	font-size: 1rem;
	color: white;
	padding: 1%;
`;

const Card = (props) => {
	return (
		<CardWrapper>
			<Name>{props.jedi.name}</Name>
			<Details>Height: {props.jedi.height}</Details>
			<Details>Mass: {props.jedi.mass}</Details>
			<Details>Hair Color: {props.jedi.hair_color}</Details>
			<Details>Skin Color: {props.jedi.skin_color}</Details>
			<Details>Eye Color: {props.jedi.eye_color}</Details>
			<Details>Birth Year: {props.jedi.birth_year}</Details>
		</CardWrapper>
	);
};

export default Card;
