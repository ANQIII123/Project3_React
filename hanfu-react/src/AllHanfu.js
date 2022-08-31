import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function AllHanfu() {


    let [allHanfu, setAllHanfu] = useState([])
    let [hanfuDisplay, setHanfuDisplay] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/allHanfu').then(
            (res) => {
                setAllHanfu(res.data)
                let _hanfuDisplay = res.data.map((eachHanfu) => {
                    return (
                        <Col md={3} key={eachHanfu.name}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="" />
                                {/* 上面src可以放汉服图片链接 */}
                                <Card.Body>
                                    <Card.Title>{eachHanfu.name}</Card.Title>
                                    <Card.Text>
                                        <p>price：{eachHanfu.cost}</p>
                                        <p>Desc：{eachHanfu.description}</p>
                                        <p>Category：{eachHanfu.category}</p>
                                        <p>Review:{eachHanfu.Review}</p>
                                    </Card.Text>
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
            <Row>
                {hanfuDisplay}

            </Row>
            <p>
                <Link to="/">homepage</Link>
            </p>


        </React.Fragment>
    )
}
