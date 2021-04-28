import React from 'react';
import Navigation from './Navigation';
import Home from './Home';

function Landing() {
	return (
		<div style={{ height: '100vh', width: '100%', backgroundColor: '#FFFFF0' }}>
			<Navigation />
			<Home />
		</div>
	);
}

export default Landing;
