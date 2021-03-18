import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteDeferment(props) {
	const deleteRequest = () => {
		axios
			.delete(`/deferment/delete/${props.id}`)
			.then(() => {
				props.deleteHandlerSuccess();
				window.location.reload(false);
			})
			.catch(() => {
				props.deleteHandlerError();
			});
		// setAlertVariant('success');
		// setAlert('Still working on this');
	};

	return (
		<Button variant='Link' size='sm' onClick={deleteRequest}>
			<DeleteIcon style={{ color: 'red' }} />
		</Button>
	);
}

export default DeleteDeferment;
