import React from 'react'
import {Nav, Navbar , NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


function Header() {
        

    return (
        <div>
          <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Taeho's Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/write">Write</Nav.Link>
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        <Nav.Link href="/login">
                        {!localStorage.getItem('token') ? 'Login' : 'Logout'}
                        </Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          

       
        </div>
    )
}

export default Header
