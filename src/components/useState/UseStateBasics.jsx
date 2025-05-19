import { useState } from "react";
import { Link } from "react-router-dom";

export default function UseStateBasics() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [isDay, setIsDay] = useState(false);

  return (
    <>
      <h1>Refresher on useState</h1>

      <h2>🧠 How to Remember useState</h2>
      <p>“I declare a state, and get two things back: the current value and the function to change it.”</p>
      <p>
        Example: <code>const [like, setLike] = useState(false)</code>
      </p>
      <p>
        → This gives us a state variable <code>like</code> and a function to change it: <code>setLike</code>.
      </p>

      <h2>📌 Examples of useState in Action</h2>

      {/* Example 1 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 1: Controlled Text Input</h3>
        <p>This tracks input and updates state as the user types.</p>

        <h4>Hello, {name || "newbie"}!</h4>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`const [name, setName] = useState("");

// JSX:
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`}</code>
          </pre>
        </div>
      </section>

      {/* Example 2 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 2: Click Counter</h3>
        <p>Tracks how many times a button is clicked.</p>

        <p>You clicked {counter} times.</p>
        <button onClick={() => setCounter(counter + 1)}>Click me to add one</button>
        <button onClick={() => setCounter(0)} style={{ marginLeft: "1rem" }}>
          Reset
        </button>

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`const [counter, setCounter] = useState(0);

// JSX:
<p>You clicked {counter} times.</p>
<button onClick={() => setCounter(counter + 1)}>Click me</button>
<button onClick={() => setCounter(0)}>Reset</button>`}</code>
          </pre>
        </div>
      </section>

      {/* Example 3 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 3: Day/Night Toggle</h3>
        <p>Switches between two states using a boolean toggle.</p>

        <button onClick={() => setIsDay(!isDay)}>{isDay ? "Switch to night" : "Switch to day"}</button>
        <p>It is {isDay ? "🌞" : "🌚"} time.</p>

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`const [isDay, setIsDay] = useState(false);

// JSX:
<button onClick={() => setIsDay(!isDay)}>
  {isDay ? "Switch to night" : "Switch to day"}
</button>
<p>It is {isDay ? "🌞" : "🌚"} time.</p>`}</code>
          </pre>
        </div>
      </section>

      <Link className="link-home" to="/" style={{ display: "inline-block", marginTop: "2rem" }}>
        ← Back to projects
      </Link>
    </>
  );
}
