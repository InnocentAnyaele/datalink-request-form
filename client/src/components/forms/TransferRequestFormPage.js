import React, { useState } from 'react';
import { Button, Form, Badge, Alert } from 'react-bootstrap';
import './Form.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TransferRequestFormPage() {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [program, setProgram] = useState('');
	const [year, setYear] = useState('');
	const [contact, setContact] = useState('');
	const [programSelect, setProgramSelect] = useState('Degree');
	const [levelSelect, setLevelSelect] = useState('none');
	const [transferFrom, setTransferFrom] = useState('');
	const [transferTo, setTransferTo] = useState('');
	const [semesterSelect, setSemesterSelect] = useState('none');
	const [sessionSelect, setSessionSelect] = useState('Day');
	const [campusSelect, setCampusSelect] = useState('Tema');
	const [reason, setReason] = useState('');

	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		console.log(name);
		console.log(id);
		console.log(program);
		console.log(year);
		console.log(contact);
		console.log(programSelect);
		console.log(levelSelect);
		console.log(transferFrom);
		console.log(transferTo);
		console.log(reason);
		console.log(semesterSelect);
		console.log(sessionSelect);
		console.log(campusSelect);

		axios
			.post('/transfer/add', {
				name: name,
				id: id,
				program: program,
				programSelect: programSelect,
				year: year,
				contact: contact,
				level: levelSelect,
				from: transferFrom,
				to: transferTo,
				semester: semesterSelect,
				session: sessionSelect,
				campus: campusSelect,
				reason: reason,
			})

			.then(() => {
				setAlertVariant('success');
				setAlert(
					"Request Submitted! You will be contacted once it's ready. Or visit the front desk with your ID within 5 working days ",
				);
			})
			.catch(() => {
				setAlertVariant('danger');
				setAlert('Could not submit reuqest. Try again later.');
			});
	};

	return (
		<div style={{ margin: '50px' }}>
			<Form
				onSubmit={submitHandler}
				className='container-fluid student-request-form'
				style={{ margin: '0 auto' }}>
				<h4 className='form-heading mt-2' style={{ textAlign: 'center' }}>
					Transfer <Badge variant='primary'>Request Form</Badge>
				</h4>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='id'>
					<Form.Label>Student ID</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='id'
						value={id}
						onChange={(e) => setId(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='program'>
					<Form.Label>Program</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='program'
						value={program}
						onChange={(e) => setProgram(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='year'>
					<Form.Label>Year</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='year'
						value={year}
						onChange={(e) => setYear(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='contact'>
					<Form.Label>Contact No. </Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='contact'
						value={contact}
						onChange={(e) => setContact(e.target.value)}
						required
					/>
				</Form.Group>
				<hr></hr>
				<Form.Text>
					<p style={{ fontSize: '15px' }}>
						<b>Student Information</b>
					</p>
					<br></br>
				</Form.Text>
				<Form.Group controlId='program-select'>
					<Form.Label>Program</Form.Label>
					<Form.Control
						as='select'
						size='sm'
						name='programSelect'
						value={programSelect}
						onChange={(e) => setProgramSelect(e.target.value)}>
						<option value='Degree'>Degree</option>
						<option value='Diploma'>Diploma</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='level-select'>
					<Form.Label>Level</Form.Label>
					<Form.Control
						as='select'
						size='sm'
						name='levelSelect'
						value={levelSelect}
						onChange={(e) => setLevelSelect(e.target.value)}>
						<option value='none'>None</option>
						<option value='100'>100</option>
						<option value='200'>200</option>
						<option value='300'>300</option>
						<option value='400'>400</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='transfer_from'>
					<Form.Label>Transfer from</Form.Label>
					<Form.Control
						type='text'
						name='transferFrom'
						value={transferFrom}
						onChange={(e) => setTransferFrom(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='transfer_to'>
					<Form.Label>Transfer To</Form.Label>
					<Form.Control
						type='text'
						name='transferTo'
						value={transferTo}
						onChange={(e) => setTransferTo(e.target.value)}
						required
					/>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='semester-select'>
					<Form.Label>Semester</Form.Label>
					<Form.Control
						as='select'
						size='sm'
						name='semesterSelect'
						value={semesterSelect}
						onChange={(e) => setSemesterSelect(e.target.value)}>
						<option value='none'>None</option>
						<option value='1st'>1st</option>
						<option value='2nd'>2nd</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='session-select'>
					<Form.Label>Session</Form.Label>
					<Form.Control
						as='select'
						size='sm'
						name='sessionSelect'
						value={sessionSelect}
						onChange={(e) => setSessionSelect(e.target.value)}>
						<option value='Day'>Day</option>
						<option value='Evening'>Evening</option>
						<option value='Weekend'>Weekend</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='campus_select'>
					<Form.Label>Campus</Form.Label>
					<Form.Control
						as='select'
						size='sm'
						name='campusSelect'
						value={campusSelect}
						onChange={(e) => setCampusSelect(e.target.value)}>
						<option value='Tema'>Tema</option>
						<option value='Accra'>Accra</option>
					</Form.Control>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='reason'>
					<Form.Label>Reason for Transfer</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						name='reason'
						value={reason}
						onChange={(e) => setReason(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='sign_group'>
					<Form.Check
						size='sm'
						type='checkbox'
						className='mb-2 mr-sm-2'
						id='sign'
						label='You must accept before submitting'
						required
					/>
				</Form.Group>
				<br></br>
				{alert === '' ? null : <Alert variant={alertVariant}>{alert}</Alert>}
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<div>
						<Link to='/'>
							<Button variant='secondary'>Return</Button>
						</Link>
					</div>
					<div>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default TransferRequestFormPage;
