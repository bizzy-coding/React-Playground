import { useState } from "react";

export default function Counter2() {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")

    return (
        <>

      <h1>Hi {name ? name : "newbie"}</h1>
      <input 
        type="text" 
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="input"> ⬅️ enter your name to personalise experience</label>

        <p>You clicked {counter} times</p>

        <button onClick={() => setCounter(counter + 1)}>Click me to add one</button>

    
       
        </>
    )
}