import React from 'react';

//import './styles.css';

// don't change the Component name "App"
export default function CounterIncrement() {
    const [counter, setCounter] = React.useState(0);
    const increment = (event) => {
        setCounter(counter => counter+1);
    }
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
}
