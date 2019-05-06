import React from "react";
import classes from './Person.css'

const Person = (props) => {
    //const name = props.name;
    //const age = props.age;
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} Years Old</p>
        <p >{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div> 
    )
}

export default Person;