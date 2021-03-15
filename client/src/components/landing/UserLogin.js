import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function UserLogin() {
	const [show, setShow] = useState(false);
	const [userSelect, setUserSelect] = useState('admin');
	const [password, setPassword] = useState('');

	const [alertVariant, setAlertVariant] = useState('');

	const [alert, setAlert] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [financialDepartmentAuth, setFinancialDepartmentAuth] = useState(false);
	// const [adminAuth, setAdminAuth] = useState(false);
	const [headOfDepartmentAuth, setHeadOfDepartmentAuth] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		console.log(userSelect);
		console.log(password);

		await axios
			.post('/user/login', {
				username: userSelect,
				password: password,
			})
			.then((res) => {
				sessionStorage.setItem('token', res.data.token);
				setAlertVariant('success');
				setAlert('Logged in successfully');
				if (userSelect === 'financialdepartment') {
					setFinancialDepartmentAuth(res.data.auth);
				}
				if (userSelect === 'headofdepartment') {
					setHeadOfDepartmentAuth(res.data.auth);
				}
			})
			.catch((err) => {
				if (err.response.status === 400) {
					setAlertVariant('danger');
					setAlert('Wrong password');
				}
				if (err.response.status === 500) {
					setAlertVariant('danger');
					setAlert('Server error');
				}
				if (err.response.status === 404) {
					setAlertVariant('danger');
					setAlert('User does not exist');
				}
			});
	};

	if (financialDepartmentAuth)
		return (
			<Redirect to='/financialDepartment/financialDepartmentConfirmPayment' />
		);

	if (headOfDepartmentAuth) {
		return <Redirect to='/headOfDepartment/headOfDepartmentClearStudent' />;
	}

	return (
		<div>
			<span onClick={handleShow}>Login</span>

			<Modal show={show} animation={false} onHide={handleClose} centered>
				<Modal.Header>
					<h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Login</h4>
				</Modal.Header>
				<Form onSubmit={submitHandler}>
					<Modal.Body>
						<Form.Group controlId='user-select'>
							<Form.Label>User</Form.Label>
							<Form.Control
								as='select'
								size='sm'
								name='userSelect'
								value={userSelect}
								required
								onChange={(e) => setUserSelect(e.target.value)}>
								<option value='admin'>Admin</option>
								<option value='financialdepartment'>
									Financial Department
								</option>
								<option value='headofdepartment'>Head of Department</option>
								<option value='library'>Library</option>
								<option value='registrar'>Registrar</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								size='sm'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								autoComplete='on'
							/>
						</Form.Group>
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

export default UserLogin;
