import React, { useState } from 'react';
import { Button, Form, Row, Col, Badge, Alert } from 'react-bootstrap';
import './Form.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentRequestFormPage() {
	const [surname, setSurname] = useState('');
	const [otherNames, setOtherNames] = useState('');
	const [id, setId] = useState('');
	const [level, setLevel] = useState('');
	const [session, setSession] = useState('');
	const [program, setProgram] = useState('');
	const [option, setOption] = useState('');
	const [contact, setContact] = useState('');
	const [address, setAddress] = useState('');

	const [attestation, setAttestation] = useState(0);
	const [transcript, setTranscript] = useState(0);
	const [internship, setInternship] = useState(0);
	const [authentication, setAuthentication] = useState(0);
	const [additional, setAdditional] = useState(0);
	const [visa, setVisa] = useState(0);
	const [express, setExpress] = useState(0);
	const [general, setGeneral] = useState(0);
	const [resident, setResident] = useState(0);
	const [renewal, setRenewal] = useState(0);
	const [bank, setBank] = useState(0);
	const [project, setProject] = useState(0);
	const [specifyProject, setSpecifyProject] = useState('');
	const [results, setResults] = useState(0);
	const [schoolCheck, setSchoolCheck] = useState(false);
	const [schoolProgram, setSchoolProgram] = useState('');
	const [employmentCheck, setEmploymentCheck] = useState(false);
	const [scholarshipCheck, setScholarshipCheck] = useState(false);
	const [otherText, setOtherText] = useState('');
	const [other, setOther] = useState(0);

	const [payment, setPayment] = useState('');
	const [payable, setPayable] = useState(0);

	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	const calculate = () => {
		var amount =
			attestation * 10 +
			transcript * 30 +
			internship * 0 +
			authentication * 5 +
			additional * 3 +
			visa * 40 +
			express * 60 +
			general * 5 +
			resident * 5 +
			renewal * 5 +
			bank * 0 +
			project * 0 +
			results * 5;

		setPayable(amount);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// calculate();

		console.log(surname);
		console.log(otherNames);
		console.log(id);
		console.log(level);
		console.log(session);
		console.log(program);
		console.log(option);
		console.log(contact);
		console.log(address);
		console.log('attestation: ' + attestation);
		console.log('transcript: ' + transcript);
		console.log('internship: ' + internship);
		console.log('authentication: ' + authentication);
		console.log('additional: ' + additional);
		console.log('visa: ' + visa);
		console.log('express: ' + express);
		console.log('general: ' + general);
		console.log('resident: ' + resident);
		console.log('renewal: ' + renewal);
		console.log('bank: ' + bank);
		console.log('project: ' + project);
		console.log('specify_project: ' + specifyProject);
		console.log('results: ' + results);
		console.log('schoolCheck: ' + schoolCheck);
		console.log('schoolProgram: ' + schoolProgram);
		console.log('employmentCheck: ' + employmentCheck);
		console.log('scholarshipCheck: ' + scholarshipCheck);
		console.log('otherText: ' + otherText);
		console.log('otherCopy: ' + other);
		console.log('Payable: ' + payable);
		console.log('Payment Reference: ' + payment);

		axios
			.post('/studentRequest/add', {
				surname: surname,
				otherNames: otherNames,
				id: id,
				level: level,
				session: session,
				program: program,
				option: option,
				contact: contact,
				address: address,
				attestation: attestation,
				transcript: transcript,
				internship: internship,
				authentication: authentication,
				additional: additional,
				visa: visa,
				express: express,
				general: general,
				resident: resident,
				renewal: renewal,
				bank: bank,
				project: project,
				specifyProject: specifyProject,
				results: results,
				schoolCheck: schoolCheck,
				schoolProgram: schoolProgram,
				employmentCheck: employmentCheck,
				scholarshipCheck: scholarshipCheck,
				otherText: otherText,
				other: other,
				payable:
					attestation * 10 +
					transcript * 30 +
					internship * 0 +
					authentication * 5 +
					additional * 3 +
					visa * 40 +
					express * 60 +
					general * 5 +
					resident * 5 +
					renewal * 5 +
					bank * 0 +
					project * 0 +
					results * 5,
				payment: payment,
			})
			.then(() => {
				setAlertVariant('success');
				setAlert(
					"Request Submitted! You will be contacted once it's ready. Or visit the front desk with your ID within 5 working days",
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
				style={{
					margin: '0 auto',
				}}>
				<h4 className='form-heading mt-2' style={{ textAlign: 'center' }}>
					Student <Badge variant='primary'>Request Form</Badge>
				</h4>
				<br></br>
				<Form.Group controlId='surname'>
					<Form.Label>Surname (Mr./Mrs./Miss)</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='surname'
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='other-names'>
					<Form.Label>Other Names</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='otherNames'
						value={otherNames}
						onChange={(e) => setOtherNames(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='id'>
					<Form.Label>Identification No.</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='id'
						value={id}
						onChange={(e) => setId(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='level'>
					<Form.Label>Level</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='level'
						value={level}
						onChange={(e) => setLevel(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='session'>
					<Form.Label>Session</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='session'
						value={session}
						onChange={(e) => setSession(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId='program'>
					<Form.Label>Programme of study</Form.Label>
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
				<Form.Group controlId='address'>
					<Form.Label>Destination Address</Form.Label>
					<Form.Control
						size='sm'
						type='text'
						name='address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<Form.Text className='text-muted'>
						address where document will be sent
					</Form.Text>
				</Form.Group>
				<hr></hr>
				<Form.Text>
					<p style={{ fontSize: '15px' }}>
						<b>Select the number of copies you want from each form</b>
					</p>
					<br></br>
				</Form.Text>
				<Form.Group controlId='attestation' as={Row}>
					<Form.Label column sm={8}>
						Letter of Attestation - GH₵10
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='attestation'
							value={attestation}
							onChange={(e) => setAttestation(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='transcipt' as={Row}>
					<Form.Label column sm={8}>
						Transcript - GH₵30
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='transcript'
							value={transcript}
							onChange={(e) => setTranscript(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='internship' as={Row}>
					<Form.Label column sm={8}>
						Internship Letter - Free
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='internship'
							value={internship}
							onChange={(e) => setInternship(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='authentication' as={Row}>
					<Form.Label column sm={8}>
						Authentication of Certificiate (Per Copy) - GH₵5
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='authentication'
							value={authentication}
							onChange={(e) => setAuthentication(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='additional' as={Row}>
					<Form.Label column sm={8}>
						Additional Copy of Authenticated Certificiate - GH₵3
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='additional'
							value={additional}
							onChange={(e) => setAdditional(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='letter_visa' as={Row}>
					<Form.Label column sm={8}>
						Letter of Introduction (Visa) - GH₵40
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='visa'
							value={visa}
							onChange={(e) => setVisa(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='letter_express' as={Row}>
					<Form.Label column sm={8}>
						Letter of Introduction (Express) - GH₵60
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='express'
							value={express}
							onChange={(e) => setExpress(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='letter_general' as={Row}>
					<Form.Label column sm={8}>
						General Letters of Introduction - GH₵5
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='general'
							value={general}
							onChange={(e) => setGeneral(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='letter_resident' as={Row}>
					<Form.Label column sm={8}>
						Letters of Residents Permit - GH₵5
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='resident'
							value={resident}
							onChange={(e) => setResident(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='resident_renewal' as={Row}>
					<Form.Label column sm={8}>
						Renewal of Resident Permit - GH₵5
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='renewal'
							value={renewal}
							onChange={(e) => setRenewal(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Group controlId='letter_bank' as={Row}>
					<Form.Label column sm={8}>
						Introduction Letter to Banks - Free
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='bank'
							value={bank}
							onChange={(e) => setBank(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='letter_project' as={Row}>
					<Form.Label column sm={8}>
						Letters of Introduction (Project Work) - Free
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='project'
							value={project}
							onChange={(e) => setProject(e.target.value)}
						/>{' '}
						<br></br>
					</Col>
				</Form.Group>
				<Form.Group controlId='project_specify' as={Row}>
					<Form.Label column sm={8}>
						<b>Specify type of project</b>
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='text'
							name='specify_project'
							value={specifyProject}
							onChange={(e) => setSpecifyProject(e.target.value)}
						/>{' '}
						<br></br>
					</Col>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='results' as={Row}>
					<Form.Label column sm={8}>
						Statement of Results - GH₵5
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='results'
							value={results}
							onChange={(e) => setResults(e.target.value)}
						/>{' '}
						<br></br>
					</Col>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='recommendation'>
					<Form.Label>
						<b>Recommendation, Letters (tick appropriate option)</b>{' '}
					</Form.Label>{' '}
					<br></br>
					<Form.Check
						size='sm'
						type='checkbox'
						className='mb-2 mr-sm-2'
						id='school'
						label='School - Free'
						checked={schoolCheck}
						onChange={(e) => setSchoolCheck(e.target.checked)}
					/>
					<Form.Control
						size='sm'
						type='text'
						name='schoolProgram'
						value={schoolProgram}
						placeholder='State intended program of study'
						onChange={(e) => setSchoolProgram(e.target.value)}
					/>{' '}
					<br></br>
					<Form.Check
						size='sm'
						type='checkbox'
						className='mb-2 mr-sm-2'
						id='employment'
						label='Employment - Free'
						checked={employmentCheck}
						onChange={(e) => setEmploymentCheck(e.target.checked)}
					/>
					<Form.Check
						size='sm'
						type='checkbox'
						className='mb-2 mr-sm-2'
						id='scholarship'
						label='Scholarship for studies - Free'
						checked={scholarshipCheck}
						onChange={(e) => setScholarshipCheck(e.target.checked)}
					/>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='other' as={Row}>
					<Form.Label column sm={8}>
						Other (please specify)
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							size='sm'
							type='number'
							min='0'
							name='otherCopy'
							value={other}
							onChange={(e) => setOther(e.target.value)}
						/>
					</Col>
				</Form.Group>
				<Form.Control
					size='sm'
					type='text'
					name='otherText'
					placeholder='Specify other'
					value={otherText}
					onChange={(e) => setOtherText(e.target.value)}
				/>
				<hr></hr>

				<Form.Group controlId='payment'>
					<Form.Text>
						<p style={{ fontSize: '15px' }}>
							<b>Payment</b>
						</p>
						<p className='text-muted'>
							Pay the amount due to 0244 444 444 and type in the payment
							reference ID below{' '}
						</p>
					</Form.Text>
					<Form.Control
						type='text'
						name='payment'
						value={payment}
						onChange={(e) => setPayment(e.target.value)}
						placeholder='Reference ID'
						required
					/>
					<p className='text-muted'>
						Type in 'Free' or 0 if the calculated price is 0.
					</p>
				</Form.Group>
				<hr></hr>
				<Form.Group controlId='sign_group'>
					<Form.Check
						size='sm'
						type='checkbox'
						className='mb-2 mr-sm-2'
						id='sign'
						label='You must accept this form certifying that the information you
                provided is true. Misrepresentaiton of facts in connection with
                this form may be sufficient cause, in and itself for
                cancellation of the request and sanctions.'
						feedback='You must agree before submitting.'
						required
					/>
				</Form.Group>
				<span>
					<b>Click the button to calculate price</b>
				</span>
				<Button
					variant='success'
					onClick={calculate}
					style={{ margin: '10px' }}
					block>
					{/* <span>Caluclate: GH₵{payable}</span> */}
					<span>GH₵{payable}</span>
				</Button>
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

export default StudentRequestFormPage;
