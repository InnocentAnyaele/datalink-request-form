import React from 'react'
import {Navbar, Button} from 'react-bootstrap'
import './Landing.css'

function Navigation() {
    return (
        <Navbar>
        <Navbar.Brand className='nav-name' href="#home">DATALINK <span style={{color: '#1360ef'}}>REQUEST FORMS</span></Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
          <Button className='ml-auto' variant="primary">admin</Button>
      </Navbar>
    )
}

export default Navigation
