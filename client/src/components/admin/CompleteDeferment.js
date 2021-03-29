import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function CompleteDeferment(props) {
	const completeRequest = () => {
		console.log(props.id);
		axios
			.patch(`/deferment/completeDeferment/${props.id}`)
			.then(() => {
				props.statusHandlerSuccess();
			})
			.catch(() => {
				props.statusHandlerError();
			});
	};

	return (
		<Button variant='success' size='sm' onClick={completeRequest}>
			Complete
		</Button>
	);
}

export default CompleteDeferment;
