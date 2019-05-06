import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const addClassesStyle = [];
    let btnClass = "";
    if(props.showPerson) {
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
    addClassesStyle.push(classes.red)
   }
   if(props.persons.length <=1) {
    addClassesStyle.push(classes.bold);
   }

    return (
        <div className={classes.Cockpit}>
            <h1>I'm React App</h1>
            <p className={addClassesStyle.join(" ")}>It's Realy Working</p>
            <button 
                className={btnClass}
                onClick={props.click}
            >Toggle Person</button>
        </div>
    )
}
export default cockpit;