import React, { useState } from "react";

interface CounterProps {
    name: string;
}

const Counter: React.FC<CounterProps> = ({name}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter, hello world {name}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Counter;