import { useState } from "react";
import "./Counter.css"
function Counter() {
    const [count, setvalue] = useState(0)
    const increment = () => {
        setvalue(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setvalue(count - 1)
        }
    }
    const reset = () => {
        setvalue(0);
    }
    return (
        <div className="counter-container">
            <h1>Counter Application</h1>
            <h2 className="count-value">{count}</h2>
            {count === 0 && (
                <p className="warning">Minimum limit reached</p>
            )}
            <div className="buttongroup">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Counter