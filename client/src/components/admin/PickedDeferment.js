import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function PickedDeferment(props) {
	const completeRequest = () => {
		console.log(props.id);
		axios
			.patch(`/deferment/pickedDeferment/${props.id}`)
			.then(() => {
				props.statusHandlerSuccess();
			})
			.catch(() => {
				props.statusHandlerError();
			});
	};

	return (
		<Button variant='success' size='sm' onClick={completeRequest}>
			Move to pick up
		</Button>
	);
}

export default PickedDeferment;
