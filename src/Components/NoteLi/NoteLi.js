import React from "react";
import "./NoteLi.css";

const NoteLi = props => {
    return <li>{props.children}<i className="fas fa-trash-alt deleteIcon"></i></li>;
}

export default NoteLi;