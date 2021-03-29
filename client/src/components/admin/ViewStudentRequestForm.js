import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Button, Modal, Table } from 'react-bootstrap';

function ViewStudentRequestForm(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button
				variant='Link'
				size='sm'
				onClick={handleShow}
				style={{ color: 'blue' }}>
				<VisibilityIcon />
			</Button>

			<Modal
				show={show}
				animation={false}
				onHide={handleClose}
				className='container-fluid m-4'
				centered>
				<Modal.Header>
					<span style={{ textAlign: 'center', fontWeight: 'bold' }}>
						{' '}
						Student Request Information
					</span>
				</Modal.Header>
				<Modal.Body>
					<Table striped hover borderless>
						<tbody>
							<tr>
								<td>Surname</td>
								<td>{props.surname}</td>
							</tr>
							<tr>
								<td>Other Names</td>
								<td>{props.othernames}</td>
							</tr>
							<tr>
								<td>ID</td>
								<td>{props.id}</td>
							</tr>
							<tr>
								<td>Level</td>
								<td>{props.level}</td>
							</tr>
							<tr>
								<td>Session</td>
								<td>{props.session}</td>
							</tr>
							<tr>
								<td>Program</td>
								<td>{props.program}</td>
							</tr>
							<tr>
								<td>Option</td>
								<td>{props.option}</td>
							</tr>
							<tr>
								<td>Contact</td>
								<td>{props.contact}</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>{props.address}</td>
							</tr>
							<tr>
								<td>Letter of Attestattion</td>
								<td>{props.attestation}</td>
							</tr>
							<tr>
								<td>Transcript</td>
								<td>{props.transcript}</td>
							</tr>
							<tr>
								<td>Internship</td>
								<td>{props.internship}</td>
							</tr>
							<tr>
								<td>Authentication of Certificate</td>
								<td>{props.authentication}</td>
							</tr>
							<tr>
								<td>Additional Copy of Authenticated Certificate</td>
								<td>{props.additional}</td>
							</tr>
							<tr>
								<td>Letter of Introduction (Visa)</td>
								<td>{props.visa}</td>
							</tr>
							<tr>
								<td>Letter of Introduction (Express)</td>
								<td>{props.express}</td>
							</tr>
							<tr>
								<td>General Letters of Introduction</td>
								<td>{props.general}</td>
							</tr>
							<tr>
								<td>Letters of Residents Permit</td>
								<td>{props.resident}</td>
							</tr>
							<tr>
								<td>Renewal of Residents Permit</td>
								<td>{props.renewal}</td>
							</tr>
							<tr>
								<td>Introduction Letter to Banks</td>
								<td>{props.bank}</td>
							</tr>
							<tr>
								<td>Letters of Introduction (Project Work)</td>
								<td>{props.project}</td>
							</tr>
							<tr>
								<td>Specify type of project</td>
								<td>{props.specifyproject}</td>
							</tr>
							<tr>
								<td>Statement of Results</td>
								<td>{props.results}</td>
							</tr>
							<tr>
								<td>School</td>
								<td>{props.schoolcheck ? 'Yes' : 'No'}</td>
							</tr>
							<tr>
								<td>Intended program of study</td>
								<td>{props.schoolprogram}</td>
							</tr>
							<tr>
								<td>Employment</td>
								<td>{props.employeecheck ? 'Yes' : 'No'}</td>
							</tr>
							<tr>
								<td>Scholarship for studies</td>
								<td>{props.scholarshipcheck ? 'Yes' : 'No'}</td>
							</tr>
							<tr>
								<td>Others</td>
								<td>{props.other}</td>
							</tr>
							<tr>
								<td>Number of Copies for other</td>
								<td>{props.othercopies}</td>
							</tr>
						</tbody>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ViewStudentRequestForm;
