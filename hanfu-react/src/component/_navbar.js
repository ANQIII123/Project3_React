import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa'
import Cookies from 'universal-cookie'


export function _Navbar() {

    const cookies = new Cookies();
    const logout = () =>{
        cookies.remove('username');
        cookies.remove('userEmail');
        window.location.href = '/'
    }

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
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
                        {
                            cookies.get('username') === undefined ?
                                <Nav.Link href="/login"><FaUserAlt /> Login/Sign Up</Nav.Link>
                                :
                                <NavDropdown title={ [<FaUserAlt/> , ' '+ cookies.get('username')]}>
                                    <NavDropdown.Item onClick={()=>{logout()}}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown >
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
