import React, { useState } from "react";

interface CounterProps {
    name: string;
}

const Counter: React.FC<CounterProps> = ({name}) => {
    const [count, setCount] = useState(0);

    return (
        <div style={{backgroundColor: '#0000ff6e'}}>
            <h1>Counter, hello world {name}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Counter;