import React from "react";
import "./Input.css";


const Input = props => {
    return <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        required={props.required}>
    </input>;
}

export default Input;