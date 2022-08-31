import React, {useState} from "react";
import Alert from 'react-bootstrap/Alert';


export function _Message(props) {
    const [show, setShow] = useState(true);


    if (props.msgProp.message) {
        console.log('message called')
        if (show) {
            return (
                <Alert variant={props.msgProp.variant || 'secondary'} onClose={() => setShow(false)} dismissible={props.msgProp.dismissible === undefined ? true : props.msgProp.dismissible}>
                    {props.msgProp.message}
                </Alert>
            )
        }
    } else {
        console.log(props.msgProp)
        console.log('not called')

        return (<></>)
    }
}
