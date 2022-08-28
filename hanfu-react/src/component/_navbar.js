import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa'


export function _Navbar() {
    return (
        
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Hanfu Store</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/cart_route">Cart </Nav.Link>
                            <Nav.Link href="/allhanfu">all-hanfu</Nav.Link>
                            <Nav.Link href="/hanfudetails">hanfu-details</Nav.Link>
                        </Nav>

                        <Nav className="justify-content-end">
                            <Nav.Link href="/login"><FaUserAlt /> Login/Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    )
}
