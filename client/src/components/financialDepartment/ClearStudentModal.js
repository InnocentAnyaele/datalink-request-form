import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function ClearStudentModal(props) {
	const [show, setShow] = useState(false);
	const [officer, setOfficer] = useState('');

	const [alertVariant, setAlertVariant] = useState('');

	const [alert, setAlert] = useState('');

	const handleClose = () => {
		window.location.reload(false);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const submitHandler = async (e) => {
		e.preventDefault();
		axios
			.patch(`/clearance/confirmFinancialDepartment/${props.id}`)
			.then(() => {
				setAlertVariant('success');
				setAlert('Student has been cleared by the financial department');
			})
			.catch(() => {
				setAlertVariant('danger');
				setAlert('Server error. Try again later');
			});
	};

	return (
		<div>
			<Button variant='success' size='sm' onClick={handleShow}>
				Clear
			</Button>

			<Modal
				show={show}
				animation={false}
				onHide={handleClose}
				centered
				className='container-fluid m-4'>
				<Modal.Header>
					<h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>
						{' '}
						Clear student
					</h4>
				</Modal.Header>
				<Form onSubmit={submitHandler}>
					<Modal.Body>
						<Form.Group controlId='officer'></Form.Group>
						<Form.Label>Name of Officer</Form.Label>
						<Form.Control
							required
							type='text'
							name='officer'
							value={officer}
							onChange={(e) => {
								setOfficer(e.target.value);
							}}
						/>
						<br></br>
						{alert === '' ? null : (
							<Alert variant={alertVariant} style={{ textAlign: 'center' }}>
								{alert}
							</Alert>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
}

export default ClearStudentModal;
