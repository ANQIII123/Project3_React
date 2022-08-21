import React from "react";
import { Link } from "react-router-dom";

// shopping cart is an object
// 1. Modify object in state
// 2. The content in the shopping cart is also an object/array

export default function Homepage(){

 return(
    <React.Fragment>
        <div>
            This is homepage
        </div>

        <p>
            <Link to="/cart_route">cart</Link>
        </p>
        
        <Link to="/hanfudetails">hanfu details</Link>
{/* 仅仅改地址栏，Link本身不会加载任何一页，link to等于号后面的东西需要和App.js内 path 的内容一致 */}

    </React.Fragment>
 )
}
