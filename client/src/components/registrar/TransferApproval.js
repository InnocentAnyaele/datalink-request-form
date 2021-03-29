import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function TransferApproval(props) {
	const ApproveTransfer = () => {
		axios
			.patch(`/transfer/confirmTransfer/${props.id}`)
			.then(() => {
				props.approveHandlerSuccess();
				window.location.reload(false);
			})
			.catch(() => {
				props.approveHandlerError();
			});
		// setAlertVariant('success');
		// setAlert('Still working on this');
	};

	return (
		<Button variant='success' size='sm' onClick={ApproveTransfer}>
			Clear
		</Button>
	);
}

export default TransferApproval;
