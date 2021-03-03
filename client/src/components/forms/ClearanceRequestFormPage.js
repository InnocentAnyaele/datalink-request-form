import React, { useState } from 'react';
import { Button, Form, Badge, Alert } from 'react-bootstrap';
import './Form.css';
import { Link } from 'react-router-dom';

function ClearanceRequestFormPage() {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [program, setProgram] = useState('');
	const [option, setOption] = useState('');
	const [campus, setCampus] = useState('');
	const [contact, setContact] = useState('');
	const [session, setSession] = useState('');
	const [year, setYear] = useState('');
	const [level, setLevel] = useState('');
	const [semester, setSemester] = useState('');

	const [alert, setAlert] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(name);
		console.log(id);
		console.log(program);
		console.log(option);
		console.log(campus);
		console.log(contact);
		console.log(session);
		console.log(year);
		console.log(level);
		console.log(semester);
		// console.log(programSelect);
		// console.log(levelSelect);
		// console.log(deferFrom);
		// console.log(deferTo);
		// console.log(reason);
		// console.log(semesterSelect);
		// console.log(sessionSelect);
		// console.log(campusSelect);

		setAlert(
			"Request Submitted! You will be contacted once it's ready. Or visit the front desk with your ID within 5 working days ",
		);
	};
	return (
		<div style={{ margin: '50px' }}>
			<Form
				onSubmit={submitHandler}
				className='container-fluid student-request-form'
				style={{ margin: '0 auto' }}>
				<h4 className='form-heading mt-2' style={{ textAlign: 'center' }}>
					Clearance <Badge variant='primary'>Request Form</Badge>
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
				<Form.Group controlId='option'>
					<Form.Label>Option</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='option'
						value={option}
						onChange={(e) => setOption(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='campus'>
					<Form.Label>Campus</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='campus'
						value={campus}
						onChange={(e) => setCampus(e.target.value)}
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
				<Form.Group controlId='session'>
					<Form.Label>Session </Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='session'
						value={session}
						onChange={(e) => setSession(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='year'>
					<Form.Label>Year </Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='year'
						value={year}
						onChange={(e) => setYear(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='level'>
					<Form.Label>Level </Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='level'
						value={level}
						onChange={(e) => setLevel(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='semester'>
					<Form.Label>Semester </Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='semester'
						value={semester}
						onChange={(e) => setSemester(e.target.value)}
						required
					/>
				</Form.Group>
				<hr></hr>
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
				{alert === '' ? null : <Alert variant='success'>{alert}</Alert>}
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

export default ClearanceRequestFormPage;
