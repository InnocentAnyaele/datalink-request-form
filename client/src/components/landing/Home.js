import React from 'react';
// import svg from '../../assets/img/svg3.svg';
import logo from '../../assets/img/dlibt.jpg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import StudentRequestForm from '../forms/StudentRequestForm';
import { Link } from 'react-router-dom';
import './Landing.css';

function Home() {
	return (
		<div
			style={{
				paddingTop: '60px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				flexWrap: 'wrap-reverse',
			}}>
			<div className='heading'>
				<p className='heading-text'>
					PUT IN A{' '}
					<span style={{ color: '#7C1315' }}>
						<i></i>REQUEST
					</span>{' '}
					<br></br> FOR YOUR FORMS HERE
				</p>
				<DropdownButton
					id='dropdown-basic-button'
					title='Select the type of form'>
					{/* <Dropdown.Item>
						<StudentRequestForm />
					</Dropdown.Item> */}
					<Dropdown.Item as={Link} to='/studentRequestFormPage'>
						Student request form
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/defermentRequestFormPage'>
						Deferment form
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/transferRequestFormPage'>
						Transfer form
					</Dropdown.Item>
					<Dropdown.Item as={Link} to='/clearanceRequestFormPage'>
						Clearance form
					</Dropdown.Item>
				</DropdownButton>
			</div>

			<div style={{ marginBottom: '0px' }}>
				<img
					className='logo img-fluid'
					src={logo}
					alt='svg'
					style={{ opacity: '0.5' }}
				/>
			</div>
		</div>
	);
}

export default Home;
