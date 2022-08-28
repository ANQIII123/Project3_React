import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function LoginPage() {
    return (
        <Container className="my-5 gradient-form">

            <Row>

                <Col col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-chinese-style-red-hanfu-costume-illustration-png-image_3889584.jpg"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">Hanfu store</h4>
                        </div>

                        <h5>Please login to your account</h5>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Registered email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Password"
                                type="password"
                            />
                        </Form.Group>


                        <div className="text-center pt-1 mb-5 pb-1">
                            <Button className="mb-4 w-100 gradient-custom-2">Sign in</Button>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Don't have an account?</p>

                            <Link to='/register'>
                                <Button className='mx-2' variant="danger">
                                    Register
                                </Button>
                            </Link>
                        </div>

                    </div>

                </Col>

                <Col col='6' className="mb-5" style={{ backgroundColor: '#151515' }}>
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">Hanfu and much more</h4>
                            <p className="small mb-0">Try to make up some fancy awesome description here and change the background using CSS. This page need styling, css...

                            </p>
                        </div>

                    </div>

                </Col>

            </Row>

        </Container>
    )
}