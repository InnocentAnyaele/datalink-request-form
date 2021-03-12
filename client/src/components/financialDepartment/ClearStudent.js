import React, { useState, useEffect } from 'react';
import './financialDepartment.css';
import { Alert, Spinner, Table, Badge } from 'react-bootstrap';
import axios from 'axios';
import Search from '../Search';

import ViewClearanceModal from './ViewClearanceModal';
import ClearStudentModal from './ClearStudentModal';
import DeleteClearance from './DeleteClearance';

function ClearStudent() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	useEffect(() => {
		if (query !== '') {
			axios.get(`/clearance/searchFinancialDepartment/${query}`).then((res) => {
				setItems(res.data);
				setLoading(false);
			});
		} else {
			axios
				.get('/clearance/getFinancialDepartment')
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

	const deleteHandlerSuccess = () => {
		setAlertVariant('success');
		setAlert('Request has been deleted');
	};

	const deleteHandlerError = () => {
		setAlertVariant('danger');
		setAlert('Server error. Try again later');
	};

	// const clearHandlerSuccess = () => {
	// 	setAlertVariant('success');
	// 	setAlert('Student has been cleared by the financial department');
	// };

	// const clearHandlerError = () => {
	// 	setAlertVariant('danger');
	// 	setAlert('Server error. Try again later');
	// };

	return (
		<>
			<h1 className='text-muted' style={{ fontSize: '20px' }}>
				Clear Student Page
			</h1>
			<hr></hr>
			<Search query={query} onChange={handleQueryRequest} />
			{alert === '' ? null : <Alert variant={alertVariant}>{alert}</Alert>}
			{loading ? (
				<div className='p-5'>
					<Spinner
						style={{ margin: '0 auto', marginLeft: '50%' }}
						animation='border'
						variant='primary'
						size='lg'
					/>
				</div>
			) : (
				<Table striped hover borderless>
					<thead>
						<tr>
							<td>Student ID</td>
							<td>Program</td>
							<td>View</td>
							<td>Clear</td>
							<td>Delete</td>
						</tr>
					</thead>

					<tbody>
						{items.map((item) => (
							<tr key={item._id}>
								<td>
									<Badge variant='primary'>{item.id}</Badge>
								</td>
								<td>{item.program}</td>
								<td>
									<ViewClearanceModal
										key={item._id}
										id={item.id}
										name={item.name}
										program={item.program}
										option={item.option}
										campus={item.campus}
										session={item.session}
										year={item.year}
										level={item.level}
										semester={item.semester}
									/>
								</td>
								<td>
									<ClearStudentModal
										key={item._id}
										id={item._id}
										// clearHandlerSuccess={clearHandlerSuccess}
										// clearHandlerError={clearHandlerError}
									/>
								</td>
								<td>
									<DeleteClearance
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
		</>
	);
}

export default ClearStudent;
