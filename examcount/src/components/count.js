import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Число: {count}</p>
            <button onClick={increment}>Увеличи</button>
            <button onClick={decrement}>Намали</button>
        </div>
    );
}

export default Counter;