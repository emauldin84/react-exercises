import React from 'react';

function toCaesar(theName) {
    let nameUpper = theName.toUpperCase();
    for (let i = 0; i < nameUpper.length; i++) {
        if (nameUpper.charCodeAt(i) >= 65 && nameUpper.charCodeAt(i) <= 77) {
            nameUpper = nameUpper.replace(nameUpper[i], String.fromCharCode(nameUpper.charCodeAt(i)+13))
        } else {
            nameUpper = nameUpper.replace(nameUpper[i], String.fromCharCode(13-(91 - nameUpper.charCodeAt(i)) + 65))
        }
    }
    // console.log(nameUpper)
    return nameUpper
}








function GreetCaesar(props) {
    return (
        <p>Greet to Caesar: {props.name ? toCaesar(props.name) : 'you'} </p>
    )
}




export default GreetCaesar;