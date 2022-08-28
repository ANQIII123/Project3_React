import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function AllHanfu() {


    let [allHanfu, setAllHanfu] = useState([])
    let [hanfuDisplay, setHanfuDisplay] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_URL+'/allHanfu').then(
            (res) => {
                setAllHanfu(res.data)
                let _hanfuDisplay = res.data.map( (eachHanfu) => {
                    return(
                    <span key={eachHanfu.name}>
                        <p>name：{eachHanfu.name}</p>
                        <p>price：{eachHanfu.cost}</p>
                        <p>Desc：{eachHanfu.description}</p>
                        <p>Category：{eachHanfu.category}</p>
                        <p>Review:{eachHanfu.Review}</p>
                    </span>
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

            {hanfuDisplay}
            <p>
            <Link to="/">homepage</Link>
        </p>


        </React.Fragment>
    )
}
