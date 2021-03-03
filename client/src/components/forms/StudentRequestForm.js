// import React, { useState } from 'react';
// import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

// function StudentRequestForm() {
// 	const [show, setShow] = useState(false);

// 	const [attestation, setAttestation] = useState(0);
// 	const [transcript, setTranscript] = useState(0);
// 	const [internship, setInternship] = useState(0);
// 	const [authentication, setAuthentication] = useState(0);
// 	const [additional, setAdditional] = useState(0);
// 	const [visa, setVisa] = useState(4);
// 	const [express, setExpress] = useState(0);
// 	const [general, setGeneral] = useState(0);
// 	const [resident, setResident] = useState(0);
// 	const [renewal, setRenewal] = useState(0);
// 	const [bank, setBank] = useState(0);
// 	const [project, setProject] = useState(0);
// 	const [results, setResults] = useState(0);
// 	const [payable, setPayable] = useState(0);
// 	const [other, setOther] = useState(0);
// 	const [schoolCheck, setSchoolCheck] = useState(true);
// 	const [employmentCheck, setEmploymentCheck] = useState(false);
// 	const [scholarshipCheck, setScholarshipCheck] = useState(false);
// 	const [surname, setSurname] = useState('');
// 	const [otherNames, setOtherNames] = useState('');
// 	const [id, setId] = useState('');
// 	const [level, setLevel] = useState();
// 	const [session, setSession] = useState('');
// 	const [program, setProgram] = useState('');
// 	const [option, setOption] = useState('');
// 	const [contact, setContact] = useState('');
// 	const [address, setAddress] = useState('');
// 	const [specifyProject, setSpecifyProject] = useState('');
// 	const [schoolProgram, setSchoolProgram] = useState('');
// 	const [otherText, setOtherText] = useState('');

// const calculate = () => {
// 	setPayable(
// 		{ attestation } * 10 +
// 			{ transcript } * 30 +
// 			{ internship } * 0 +
// 			{ authentication } * 5 +
// 			{ additional } * 3 +
// 			{ visa } * 40 +
// 			{ express } * 60 +
// 			{ general } * 5 +
// 			{ resident } * 5 +
// 			{ renewal } * 5 +
// 			{ bank } * 0 +
// 			{ project } * 0,
// 		{ results } * 0,
// 	);
// };

// 	// const changeHandler = (e) => {
// 	// 	setState({ [e.target.name]: [e.target.value] });
// 	// };

// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		alert('done');
// 	};

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	return (
// 		<div>
// 			<span onClick={handleShow}>Student request form</span>

// 			<Modal show={show} animation={false} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Student Request Form</Modal.Title>
// 				</Modal.Header>
// 				<Form onSubmit={submitHandler}>
// 					<Modal.Body>
// 						<Form.Group controlId='surname'>
// 							<Form.Label>Surname (Mr./Mrs./Miss)</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='surname'
// 								value={surname}
// 								onChange={(e) => setSurname(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='other-names'>
// 							<Form.Label>Other Names</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='otherNames'
// 								value={otherNames}
// 								onChange={(e) => setOtherNames(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='id'>
// 							<Form.Label>Identification No.</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='id'
// 								value={id}
// 								onChange={(e) => setId(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='level'>
// 							<Form.Label>Level</Form.Label>
// 							<Form.Control
// 								type='number'
// 								name='level'
// 								value={level}
// 								onChange={(e) => setLevel(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='session'>
// 							<Form.Label>Session</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='session'
// 								value={session}
// 								onChange={(e) => setSession(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='program'>
// 							<Form.Label>Programme of study</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='program'
// 								value={program}
// 								onChange={(e) => setProgram(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='option'>
// 							<Form.Label>Option</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='option'
// 								value={option}
// 								onChange={(e) => setOption(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='contact'>
// 							<Form.Label>Contact No. </Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='contact'
// 								value={contact}
// 								onChange={(e) => setContact(e.target.value)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId='address'>
// 							<Form.Label>Destination Address</Form.Label>
// 							<Form.Control
// 								type='text'
// 								name='address'
// 								value={address}
// 								onChange={(e) => setAddress(e.target.value)}
// 							/>
// 							<Form.Text className='text-muted'>
// 								address where document will be sent
// 							</Form.Text>
// 						</Form.Group>

// 						<hr></hr>

// 						<Form.Text>
// 							<p style={{ fontSize: '15px' }}>
// 								<b>Select the number of copies you want from each form</b>
// 							</p>
// 							<br></br>
// 						</Form.Text>

// 						<Form.Group controlId='attestation' as={Row}>
// 							<Form.Label column sm={8}>
// 								Letter of Attestation - 10GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='attestation'
// 									value={attestation}
// 									onChange={(e) => setAttestation(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='transcipt' as={Row}>
// 							<Form.Label column sm={8}>
// 								Transcript - 30GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='transcript'
// 									value={transcript}
// 									onChange={(e) => setTranscript(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='internship' as={Row}>
// 							<Form.Label column sm={8}>
// 								Internship Letter - Free
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='internship'
// 									value={internship}
// 									onChange={(e) => setInternship(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='authentication' as={Row}>
// 							<Form.Label column sm={8}>
// 								Authentication of Certificiate (Per Copy) - 5GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='authentication'
// 									value={authentication}
// 									onChange={(e) => setAuthentication(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='additional' as={Row}>
// 							<Form.Label column sm={8}>
// 								Additional Copy of Authenticated Certificiate - 3GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='additional'
// 									value={additional}
// 									onChange={(e) => setAdditional(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='letter_visa' as={Row}>
// 							<Form.Label column sm={8}>
// 								Letter of Introduction (Visa) - 40GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='visa'
// 									value={visa}
// 									onChange={(e) => setVisa(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='letter_express' as={Row}>
// 							<Form.Label column sm={8}>
// 								Letter of Introduction (Express) - 60GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='express'
// 									value={express}
// 									onChange={(e) => setExpress(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='letter_general' as={Row}>
// 							<Form.Label column sm={8}>
// 								General Letters of Introduction - 5GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='general'
// 									value={general}
// 									onChange={(e) => setGeneral(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='letter_resident' as={Row}>
// 							<Form.Label column sm={8}>
// 								Letters of Residents Permit - 5GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='resident'
// 									value={resident}
// 									onChange={(e) => setResident(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='resident_renewal' as={Row}>
// 							<Form.Label column sm={8}>
// 								Renewal of Resident Permit - 5GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='renewal'
// 									value={renewal}
// 									onChange={(e) => setRenewal(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='letter_bank' as={Row}>
// 							<Form.Label column sm={8}>
// 								Introduction Letter to Banks - Free
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='bank'
// 									value={bank}
// 									onChange={(e) => setBank(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<hr></hr>
// 						<Form.Group controlId='letter_project' as={Row}>
// 							<Form.Label column sm={8}>
// 								Letters of Introduction (Project Work) - Free
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='project'
// 									value={project}
// 									onChange={(e) => setProject(e.target.value)}
// 								/>{' '}
// 								<br></br>
// 							</Col>
// 						</Form.Group>
// 						<Form.Group controlId='project_specify' as={Row}>
// 							<Form.Label column sm={8}>
// 								<b>Specify type of project</b>
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='text'
// 									name='specify_project'
// 									value={specifyProject}
// 									onChange={(e) => setSpecifyProject(e.target.value)}
// 								/>{' '}
// 								<br></br>
// 							</Col>
// 						</Form.Group>
// 						<hr></hr>
// 						<Form.Group controlId='results' as={Row}>
// 							<Form.Label column sm={8}>
// 								Statement of Results - 5GH
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='results'
// 									value={results}
// 									onChange={(e) => setResults(e.target.value)}
// 								/>{' '}
// 								<br></br>
// 							</Col>
// 						</Form.Group>
// 						<hr></hr>
// 						<Form.Group controlId='recommendation'>
// 							<Form.Label>
// 								<b>Recommendation, Letters (tick appropriate option)</b>{' '}
// 							</Form.Label>{' '}
// 							<br></br>
// 							<Form.Check
// 								type='checkbox'
// 								className='mb-2 mr-sm-2'
// 								id='school'
// 								label='School: State intended program of study'
// 								checked={schoolCheck}
// 								onChange={(e) => setSchoolCheck(e.target.checked)}
// 							/>
// 							<Form.Control
// 								type='text'
// 								name='schoolProgram'
// 								value={schoolProgram}
// 								onChange={(e) => setSchoolProgram(e.target.value)}
// 							/>
// 							<Form.Check
// 								type='checkbox'
// 								className='mb-2 mr-sm-2'
// 								id='employment'
// 								label='Employment'
// 								// checked={employmentCheck}
// 							/>
// 							<Form.Check
// 								type='checkbox'
// 								className='mb-2 mr-sm-2'
// 								id='scholarship'
// 								label='Scholarship for studies'
// 								// checked={scholarshipCheck}
// 							/>
// 						</Form.Group>
// 						<hr></hr>
// 						<Form.Group controlId='other' as={Row}>
// 							<Form.Label column sm={8}>
// 								Other (please specify)
// 							</Form.Label>
// 							<Col sm={4}>
// 								<Form.Control
// 									type='number'
// 									min='0'
// 									name='otherCopy'
// 									value={other}
// 									onChange={(e) => setOther(e.target.value)}
// 								/>
// 							</Col>
// 						</Form.Group>
// 						<Form.Control
// 							type='text'
// 							name='otherText'
// 							placeholder='Specify other'
// 							value={otherText}
// 							onChange={(e) => setOtherText(e.target.value)}
// 						/>
// 						<hr></hr>
// 						<Form.Group controlId='sign_group'>
// 							<Form.Check
// 								type='checkbox'
// 								className='mb-2 mr-sm-2'
// 								id='sign'
// 								label='You must accept this form certifying that the information you
// 								provided is true. Misrepresentaiton of facts in connection with
// 								this form may be sufficient cause, in and itselfm for
// 								cancellation of the request and sanctions.'
// 								feedback='You must agree before submitting.'
// 								required
// 							/>
// 							{/* <Form.Label>
// 								You must accept this form certifying that the information you
// 								provided is true. Misrepresentaiton of facts in connection with
// 								this form may be sufficient cause, in and itselfm for
// 								cancellation of the request and sanctions.
// 							</Form.Label> */}
// 						</Form.Group>
// 						<span>
// 							{' '}
// 							<b> Total payable : {payable} </b>
// 						</span>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant='secondary' onClick={handleClose}>
// 							Close
// 						</Button>
// 						<Button variant='primary' type='submit'>
// 							Submit
// 						</Button>
// 					</Modal.Footer>
// 				</Form>
// 			</Modal>
// 		</div>
// 	);
// }

// export default StudentRequestForm;
