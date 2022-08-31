import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { _Message } from "../component/_message";


export default function RegisterPage() {
    let [email, setEmail] = useState('');
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [password2, setPassword2] = useState('');
    let [msgProp, setMsgProp] = useState({})

    const handleRegister = async () => {
        //validation missing
        // check all fields are filled, and password == password 2
        console.log(email, userName, password)

        let result = await axios.post(process.env.REACT_APP_SERVER_URL + '/register', {
            email,
            userName,
            password
        })


        if (result.data) {
            console.log(result.data)

            setMsgProp({ message: result.data + ' registered successful, please go to login', variant: 'success' })
            
            setEmail('');
            setUserName('') 
            setPassword('') 
            setPassword2('')
        }


    }

    return (

        <Container className="my-5 gradient-form">

            <Row>

                <Col col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-chinese-style-red-hanfu-costume-illustration-png-image_3889584.jpg"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-3 pb-1">Hanfu store</h4>
                        </div>

                        <a className="text-muted mb-2" href="/login">Go to login</a>

                        <h5 className="text-center">Register</h5>

                        {msgProp.message && <_Message msgProp = {msgProp}/>}

                        <Form.Group className="mb-3">
                            <Form.Label>Register an email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={userName}
                                onChange={(e) => { setUserName(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control
                                placeholder="Re-enter Password"
                                type="password"
                                value={password2}
                                onChange={(e) => { setPassword2(e.target.value) }}
                            />
                        </Form.Group>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <Button className="mb-4 w-100 gradient-custom-2" onClick={() => { handleRegister() }}>Register</Button>
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