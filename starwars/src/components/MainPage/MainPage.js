import React from 'react';
import Card from '../Card/Card';

const MainPage = (props) => {
	return (
		<div>
			{/* <h2>Main Page goes here</h2> */}
			{props.data.map((jedi, idx) => {
				return <Card key={idx} jedi={jedi} />;
			})}
		</div>
	);
};

export default MainPage;
