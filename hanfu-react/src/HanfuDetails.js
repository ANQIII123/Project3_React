import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function HanfuDetails() {
    let [thisHanfu, sertThisHanfu] = useState([])
    let [hanfuDisplay, setHanfuDisplay] = useState([])

    useEffect(() => {
        axios.get('https://3000-anqiii123-p3express-yufgfp2dcqg.ws-us63.gitpod.io/hf-detail/').then(
            (res) => {
                sertThisHanfu(res.data)
                let _hanfuDisplay = 
                (
                    <span key={res.data.name}>
                        <p>Hanfu Name : {res.data.name}</p>
                        <p>Hanfu Price : {res.data.cost}</p>
                    </span>
                )
                

                setHanfuDisplay(_hanfuDisplay)
            }
        )



    }, [])

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
