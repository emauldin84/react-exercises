import React from 'react';

function toLeet(theName) {
    let nameUpper = theName.toUpperCase();
    
    const leetLetters = {
        'A': '4',
        'E': '3',
        'G': '6',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7',
}
    for(let i = 0; i < nameUpper.length; i++){
        if (leetLetters[nameUpper[i]]) {
            nameUpper = nameUpper.replace(nameUpper[i], leetLetters[nameUpper[i]])
        }
    }
    console.log(nameUpper)
    return nameUpper


    }


function GreetLeet(props) {
    return (
        <p>Greet to L337: {props.name ? toLeet(props.name) : 'y0u'}</p>
    )
}


export default GreetLeet;