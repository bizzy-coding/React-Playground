import { useState } from "react";

export default function Counter2() {

    const [counter, setCounter] = useState(0)

    return (
        <>

      

        <p>You clicked {counter} times</p>

        <button onClick={() => setCounter(counter + 1)}>Click me to add one</button>
        
        </>
    )
}