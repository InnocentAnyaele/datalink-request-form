import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Button, Modal, Table } from 'react-bootstrap';

function ViewClearanceModal(props) {
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
						Student Clearance Information
					</span>
				</Modal.Header>
				<Modal.Body>
					<Table striped hover borderless>
						<tbody>
							<tr>
								<td>Name</td>
								<td>{props.name}</td>
							</tr>
							<tr>
								<td>ID</td>
								<td>{props.id}</td>
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
								<td>Campus</td>
								<td>{props.campus}</td>
							</tr>
							<tr>
								<td>Session</td>
								<td>{props.session}</td>
							</tr>
							<tr>
								<td>Academic Year</td>
								<td>{props.year}</td>
							</tr>
							<tr>
								<td>Level</td>
								<td>{props.level}</td>
							</tr>
							<tr>
								<td>Semester</td>
								<td>{props.semester}</td>
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

export default ViewClearanceModal;
