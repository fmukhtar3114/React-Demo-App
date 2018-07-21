import React from 'react'; 

const person = (props) => {
    return (
    <div>
    < p onClick={props.click}>   I am {props.name} { Math.random() * 2 } </p>
    <p>{props.children}</p>
    </div>
    )
}
export default person;