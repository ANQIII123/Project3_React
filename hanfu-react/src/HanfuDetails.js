import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function HanfuDetails() {
    let [allHanfu, setAllHanfu] = useState([])
    let [hanfuDisplay, setHanfuDisplay] = useState([])

    useEffect(() => {
        axios.get('https://3000-anqiii123-p3express-yufgfp2dcqg.ws-us62.gitpod.io/allHanfu').then(
            (res) => {
                setAllHanfu(res.data)
                let _hanfuDisplay = res.data.map( (eachHanfu) => {
                    return(
                    <span key={eachHanfu.name}>
                        <p>汉服名字：{eachHanfu.name}</p>
                        <p>价格：{eachHanfu.price}</p>
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
                This is HanfuDetails
            </div>

            {hanfuDisplay}
            <p>
            <Link to="/">homepage</Link>
        </p>


        </React.Fragment>
    )
}
