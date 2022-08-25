import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function _Navbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="/">Hanfu Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cart_route">Cart </Nav.Link>
                        <Nav.Link href="/allhanfu">all hanfu</Nav.Link>
                        <Nav.Link href="/hanfudetails">hanfu details</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
