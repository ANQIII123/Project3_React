import React from "react";
import { Link } from "react-router-dom";

export function Cartpage_page(){

 return(
    <React.Fragment>
        <div>
            This is cart page
        </div>
        <p>
            <Link to="/">homepage</Link>
        </p>


    </React.Fragment>
 )
}
