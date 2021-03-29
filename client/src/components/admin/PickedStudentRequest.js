import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function PickedStudentRequest(props) {
	const pickedRequest = () => {
		axios
			.patch(`/studentRequest/pickedRequest/${props.id}`)
			.then(() => {
				props.statusHandlerSuccess();
			})
			.catch(() => {
				props.statusHandlerError();
			});
	};

	return (
		<Button variant='success' size='sm' onClick={pickedRequest}>
			Move to pick up
		</Button>
	);
}

export default PickedStudentRequest;
