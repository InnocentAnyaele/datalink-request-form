import React, { useState, useEffect } from 'react';
import './financialDepartment.css';
import { Alert, Spinner, Table, Badge } from 'react-bootstrap';
import axios from 'axios';
import Search from '../Search';
import DeleteStudentRequest from './DeleteStudentRequest';
import PaymentConfirmation from './PaymentConfirmation';

function ConfirmPayment() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	const deleteHandlerSuccess = () => {
		setAlertVariant('success');
		setAlert('Request has been deleted');
	};

	const deleteHandlerError = () => {
		setAlertVariant('danger');
		setAlert('Server error. Try again later');
	};

	const confirmHandlerSuccess = () => {
		setAlertVariant('success');
		setAlert('Payment Confirmed! Request has been moved to admin page.');
	};

	const confirmHandlerError = () => {
		setAlertVariant('danger');
		setAlert('Server error. Try again later.');
	};

	useEffect(() => {
		if (query !== '') {
			axios.get(`/studentRequest/searchPaidFalse/${query}`).then((res) => {
				setItems(res.data);
				setLoading(false);
			});
		} else {
			axios
				.get('/studentRequest/getPaidFalse')
				.then((res) => {
					setItems(res.data);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
					setAlertVariant('danger');
					setAlert('Error retrieving data');
				});
		}
	}, [query]);

	function handleQueryRequest(data) {
		setQuery(data);
	}

	return (
		<div>
			<h1 className='text-muted' style={{ fontSize: '20px' }}>
				Confirm Student Payment Page
			</h1>
			<hr></hr>
			<Search query={query} onChange={handleQueryRequest} />
			{alert === '' ? null : <Alert variant={alertVariant}>{alert}</Alert>}
			{loading ? (
				<div>
					<Spinner animation='border' variant='primary' size='lg' />
				</div>
			) : (
				<Table striped hover borderless>
					<thead>
						<tr>
							<th>Student</th>
							<th>Reference</th>
							<th>Price(Cedis)</th>
							<th>Confirm</th>
							<th>Delete</th>
						</tr>
					</thead>

					<tbody>
						{items.map((item) => (
							<tr key={item._id}>
								<td> {item.id}</td>
								<td>
									<Badge variant='primary'>{item.reference}</Badge>
								</td>
								<td>{item.price}</td>
								<td>
									<PaymentConfirmation
										key={item._id}
										id={item._id}
										confirmHandlerSuccess={confirmHandlerSuccess}
										confirmHandlerError={confirmHandlerError}
									/>
								</td>
								<td>
									<DeleteStudentRequest
										key={item._id}
										id={item._id}
										deleteHandlerSuccess={deleteHandlerSuccess}
										deleteHandlerError={deleteHandlerError}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
}

export default ConfirmPayment;
