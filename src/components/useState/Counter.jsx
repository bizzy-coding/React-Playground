import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {

    const [counter, setCounter] = useState(0)

    return (
        <>

        <h1>Example simple counter snippet</h1>

        <p>Total: {counter}</p> 

        <div className="counter-btns">

        <button onClick={() => setCounter(counter - 1)}>-1</button>

        <button onClick={() => setCounter(counter + 1)}>+1 </button>
  
        <button onClick={() => setCounter(0)}>RESET</button>
        </div>

        <h2>The code</h2>


        <pre style={{ 
  background: "black", 
  padding: "1rem", 
  borderRadius: "8px", 
  marginTop: "2rem", 
  overflowX: "auto" 
}}>
    <code>
        {`
         <p>Total: {counter}</p> 

         <button onClick={() => setCounter(counter - 1)}>-1</button>
     
             <button onClick={() => setCounter(counter + 1)}>+1 </button>
       
             <button onClick={() => setCounter(0)}>RESET</button>
        
        `}
    const [counter, setCounter] = useState(0)

   
    </code>
</pre>

        <Link className="link-home" to="/">Go back to projects</Link>

        </>
    )
}