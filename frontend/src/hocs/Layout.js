import React from "react";
import Navbar from "../components/Navbar.js";

const layout = (props) => {
    return (<div>
        <Navbar/>
        {props.children}

    </div>);

}

export default layout;