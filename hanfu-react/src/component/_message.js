import React, {useEffect, useRef, useState} from "react";
import Alert from 'react-bootstrap/Alert';


export function _Message(props) {
    const [show, setShow] = useState(true);
    var msg = useRef()

    useEffect(()=>{
        setShow(true)
    },[msg.current])

    if (props.msgProp.message) {
        console.log('there is message')
        console.log(msg)
        msg.current = props.msgProp.message 
        if (show) {
            return (
                <Alert variant={props.msgProp.variant || 'secondary'} onClose={() => {setShow(false); msg.current = ''}} dismissible={props.msgProp.dismissible === undefined ? true : props.msgProp.dismissible}>
                    {props.msgProp.message}
                </Alert>
            )
        }
    } else {
        console.log(props.msgProp)
        console.log('there is no message')

        return (<></>)
    }
}
