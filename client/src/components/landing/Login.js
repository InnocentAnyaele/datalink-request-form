import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';

function Login() {
	const [show, setShow] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [alert, setAlert] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(password);
		setAlert('Logged In successfully!');
	};

	return (
		<div>
			<Button variant='primary' onClick={handleShow}>
				admin
			</Button>

			<Modal show={show} animation={false} onHide={handleClose}>
				<Modal.Header>
					<h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Login</h4>
				</Modal.Header>
				<Form onSubmit={submitHandler}>
					<Modal.Body>
						<Form.Group controlId='username'>
							<Form.Label>Username</Form.Label>
							<Form.Control
								size='sm'
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								size='sm'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>
						<br></br>
						{alert === '' ? null : (
							<Alert variant='success' style={{ textAlign: 'center' }}>
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

export default Login;
