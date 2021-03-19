import React, { useState, useEffect } from 'react';
import './Admin.css';
import { Alert, Table, Badge } from 'react-bootstrap';
import axios from 'axios';
import Search from '../Search';
import { Spin } from 'antd';

import ViewStudentRequestForm from './ViewStudentRequestForm';
import DeleteStudentRequest from '../financialDepartment/DeleteStudentRequest';
// import CompleteStudentRequest from './CompleteStudentRequest';

function StudentRequestFormPicked() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	useEffect(() => {
		if (query !== '') {
			axios.get(`/studentRequest/searchPickedRequest/${query}`).then((res) => {
				setItems(res.data);
				setLoading(false);
			});
		} else {
			axios
				.get('/studentRequest/getPickedRequest')
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

	// const statusHandlerSuccess = () => {
	// 	setAlertVariant('success');
	// 	setAlert('Status changed successfully');
	// };

	// const statusHandlerError = () => {
	// 	setAlertVariant('danger');
	// 	setAlert('Server error. Try again later');
	// };

	return (
		<>
			<h1 className='text-muted' style={{ fontSize: '20px' }}>
				Picked Up Student Requests
			</h1>
			<hr></hr>
			<Search query={query} onChange={handleQueryRequest} />
			{alert === '' ? null : <Alert variant={alertVariant}>{alert}</Alert>}
			{loading ? (
				<div className='p-5'>
					{/* <Spinner
						style={{ margin: '0 auto', marginLeft: '50%' }}
						animation='border'
						variant='primary'
						size='lg'
					/> */}
					<Spin size='large' style={{ margin: '0 auto', marginLeft: '50%' }} />
				</div>
			) : (
				<Table striped hover borderless>
					<thead>
						<tr>
							<td>Student ID</td>
							<td>Program</td>
							<td>View</td>
							{/* <td>Complete</td> */}
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
									<ViewStudentRequestForm
										key={item._id}
										id={item.id}
										surname={item.surname}
										othernames={item.othernames}
										level={item.level}
										program={item.program}
										option={item.option}
										contact={item.contact}
										address={item.address}
										session={item.session}
										attestation={item.attestation}
										transcript={item.transcript}
										internship={item.internship}
										authentication={item.authentication}
										additional={item.additional}
										visa={item.visa}
										express={item.express}
										general={item.general}
										resident={item.resident}
										renewal={item.renewal}
										bank={item.bank}
										project={item.project}
										specifyproject={item.specifyproject}
										results={item.results}
										schoolcheck={item.schoolcheck}
										schoolprogram={item.schoolprogram}
										employeecheck={item.employeecheck}
										scholarshipcheck={item.scholarshipcheck}
										other={item.other}
										othercopies={item.othercopies}
										price={item.price}
										reference={item.reference}
									/>
								</td>
								{/* <td>
									<CompleteStudentRequest
										key={item._id}
										id={item._id}
										statusHandlerSuccess={statusHandlerSuccess}
										statusHandlerError={statusHandlerError}
									/>
								</td> */}
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
		</>
	);
}

export default StudentRequestFormPicked;
