import React from 'react';
import "./Input.css";

export default function Input(props) {
    return(
        <input className={`input ${props.className || ""}`} value={props.value} onChange={props.onChange}/>
    )
}