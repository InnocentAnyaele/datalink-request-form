import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Landing.css';
// import AdminLogin from './AdminLogin';
// import FinancialDepartmentLogin from './FinancialDepartmentLogin';
// import HeadOfDepartmentLogin from './HeadOfDepartmentLogin';
// import LibraryLogin from './LibraryLogin';
// import RegistrarLogin from './RegistrarLogin';
import UserLogin from './UserLogin';

function Navigation() {
	return (
		<Navbar style={{ backgroundColor: 'transparent' }}>
			<Navbar.Brand className='nav-name' href='#home'>
				<span style={{ color: '#7C1315' }}>DATALINK REQUEST FORMS</span>
			</Navbar.Brand>

			{/* <NavDropdown
				title='Login'
				className='ml-auto'
				drop='left'
				id='login-dropdown'>
				<NavDropdown.Item>
					<FinancialDepartmentLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<HeadOfDepartmentLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<LibraryLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<RegistrarLogin />
				</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item>
					<AdminLogin />
				</NavDropdown.Item>
			</NavDropdown> */}

			<Button
				className='ml-auto'
				variant='primary'
				style={{ backgroundColor: '#7C1315' }}>
				<UserLogin />
			</Button>
		</Navbar>
	);
}

export default Navigation;
