import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Cookies from "universal-cookie";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FaTrash } from "react-icons/fa";

export function Cartpage_page() {

    let [allItems, setAllItems] = useState([])

    
    useEffect(() => {
        const cookies = new Cookies();
        console.log(cookies.get('user'))
        axios.post(process.env.REACT_APP_SERVER_URL + '/cart', { user: cookies.get('user') }).then(
            (res) => {
                console.log(res.data.shoppingCart)
                let _allItems = res.data.shoppingCart.map(eachItem => {
                    return eachCartitem(eachItem)
                })
                setAllItems(_allItems)
            }
        )
    }, [])


    const eachCartitem = (hanfu) => {
        return (
            <Card key={1} className="rounded-3 mb-4">
                <Card.Body className="p-4">
                    <Row className="justify-content-between align-items-center">
                        <Col md="2" lg="2" xl="2">
                            <Card.Img className="rounded-3"
                                src={hanfu.img_address}
                                alt="Cotton T-shirt" />
                        </Col>
                        <Col md="3" lg="3" xl="3">
                            <p className="lead fw-normal mb-2">Hanfu ID {hanfu.id}</p>
                            <p>
                                <span className="text-muted">Size: </span>M{" "}
                                <span className="text-muted">Color: </span>Grey
                            </p>
                        </Col>
                        <Col md="3" lg="3" xl="2"
                            className="d-flex align-items-center justify-content-around">
                            <Button color="link" className="px-2">
                                -
                            </Button>

                            <input min={0} defaultValue={hanfu.quantity} type="number" size="sm" />

                            <Button color="link" className="px-2">
                                +
                            </Button>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="offset-lg-1">
                            <h5 className="mb-0">
                                $499.00
                            </h5>
                        </Col>
                        <Col md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-danger">
                                <FaTrash />
                            </a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }

    return (
        <React.Fragment>
            <div>
                This is cart page
            </div>

            {allItems}

            <p>
                <Link to="/">homepage</Link>
            </p>


        </React.Fragment>
    )
}
