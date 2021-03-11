import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function PaymentConfirmation(props) {
	const confirmPaymentHandler = () => {
		axios
			.patch(`/studentRequest/confirmPayment/${props.id}`)
			.then(() => {
                props.confirmHandlerSuccess()
                window.location.reload(false)
            })
			.catch(() => {
                props.confirmHandlerError()
            });
	};

	return (
		<Button variant='success' size='sm' onClick={confirmPaymentHandler}>
			Confirm Payment
		</Button>
	);
}

export default PaymentConfirmation;
