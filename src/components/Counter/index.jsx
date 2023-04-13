import React, { useState } from "react";
import "./style.css";

const Counter = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    const reset = () => {
        setCount(1);
    };

    return (
        <div className='counter-content'>
            <div className='container'>
                <div className='counter-form'>
                    <p className='count-number'>{count}</p>
                    <div className='btn-group'>
                        <button
                            disabled={count == 10}
                            className='increment-btn'
                            onClick={increment}
                        >
                            Increment
                        </button>
                        <button className='reset-btn' onClick={reset}>
                            Reset
                        </button>
                        <button
                            disabled={count == 1}
                            className='decrement-btn'
                            onClick={decrement}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
