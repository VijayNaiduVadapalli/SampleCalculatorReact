import React from 'react';
import './App.css'
const Button =(props)=>{
    return(
        <input type="button" onClick={props.handleClick} value={props.label}/>
    );
}
export default Button;

