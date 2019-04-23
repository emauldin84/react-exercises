import React from 'react';

function toLower(theName) {
    return theName.toLowerCase();
}

function GreetLower(props) {
    return(
        <p>Greet to lower: {props.name ? toLower(props.name) : 'you'}</p>
    )
}


export default GreetLower;