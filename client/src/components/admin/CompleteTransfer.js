import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function CompleteTransfer(props) {
	const completeRequest = () => {
		console.log(props.id);
		axios
			.patch(`/transfer/completeTransfer/${props.id}`)
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

export default CompleteTransfer;
