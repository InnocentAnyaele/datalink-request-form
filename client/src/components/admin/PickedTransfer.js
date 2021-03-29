import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function PickedTransfer(props) {
	const completeRequest = () => {
		console.log(props.id);
		axios
			.patch(`/transfer/pickedTransfer/${props.id}`)
			.then(() => {
				props.statusHandlerSuccess();
			})
			.catch(() => {
				props.statusHandlerError();
			});
	};

	return (
		<Button variant='success' size='sm' onClick={completeRequest}>
			Move to picked up
		</Button>
	);
}

export default PickedTransfer;
