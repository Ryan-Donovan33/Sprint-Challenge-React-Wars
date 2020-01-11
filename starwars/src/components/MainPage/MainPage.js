import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const MainWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center
	width: 90%;
`;
const MainPage = (props) => {
	return (
		<MainWrapper>
			{/* <h2>Main Page goes here</h2> */}
			{props.data.map((jedi, idx) => {
				return <Card key={idx} jedi={jedi} />;
			})}
		</MainWrapper>
	);
};

export default MainPage;
