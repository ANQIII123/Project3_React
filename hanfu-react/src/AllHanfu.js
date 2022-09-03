import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import Cookies from "universal-cookie";


// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function AllHanfu() {

    let [allHanfu, setAllHanfu] = useState([])
    let [hanfuDisplay, setHanfuDisplay] = useState([])



    useEffect(() => {
        const cookies = new Cookies()

        async function addToCart(hanfuId) {
            console.log(hanfuId)
            axios.post(`${process.env.REACT_APP_SERVER_URL}/${hanfuId}/add`, { user: cookies.get('user') })

        }

        axios.get(process.env.REACT_APP_SERVER_URL + '/allHanfu').then(
            (res) => {
                setAllHanfu(res.data)
                let _hanfuDisplay = res.data.map((eachHanfu) => {
                    return (
                        <Col md={3} key={eachHanfu.name}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={eachHanfu.img_address} style={{ maxHeight: '25em', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{eachHanfu.name}</Card.Title>
                                    <Card.Text>
                                        Price：{eachHanfu.cost}<br />
                                        Desc：{eachHanfu.description}<br />
                                        Category：{eachHanfu.category}<br />
                                        Review: {eachHanfu.Review}<br />
                                    </Card.Text>
                                    <Button variant="primary" className='px-4 me-3 float-end' onClick={() => { addToCart(eachHanfu.id) }}> <MdOutlineAddShoppingCart /> </Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    )
                })
                setHanfuDisplay(_hanfuDisplay)
            }
        )
    }, [])

    console.log(allHanfu)
    console.log(hanfuDisplay)

    return (
        <React.Fragment>
            <div>
                This is all hanfu
            </div>
            <Row className="mx-5">
                {hanfuDisplay}

            </Row>
            <p>
                <Link to="/">homepage</Link>
            </p>


        </React.Fragment>
    )
}
