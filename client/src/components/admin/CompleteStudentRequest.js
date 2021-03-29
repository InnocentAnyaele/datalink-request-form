import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function CompleteStudentRequest(props) {
	const completeRequest = () => {
		axios
			.patch(`/studentRequest/completeRequest/${props.id}`)
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

export default CompleteStudentRequest;
