import React from 'react';

//import './styles.css';

// don't change the Component name "App"
export default function ValidateInput() {
    const [valid, setValid] = React.useState(false);
    
    const isValid = (event) =>{
        event.target.value.length < 3 ? setValid(false) : setValid(true);
    }
    return (
        <form>
            <label>Your message</label>
            <input onChange={isValid} type="text" />
            <p>{valid ? 'Valid' : 'Invalid'} message</p>
            
        </form>
    );
}