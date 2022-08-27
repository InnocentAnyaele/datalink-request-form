import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

function Landing() {
	return (
		<div
			style={{ minHeight: '100vh', width: '100%', backgroundColor: '#FFFFFF' }}>
			<Navigation />
			<Home />
		</div>
	);
}

export default Landing;
