import { Link } from "react-router-dom";

// Child component for Example 1
function Greeting({ name }) {
  return <h4>Hello, {name || "friend"}!</h4>;
}

// Child component for Example 2
function StatusMessage({ isOnline }) {
  return <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>;
}

// Child component for Example 3
function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  );
}

export default function PropsAndComponents() {
  const tasks = ["Buy milk", "Walk dog", "Deploy project"];
  const userName = "Bizz";
  const online = true;

  return (
    <>
      <h1>Refresher on Props & Components</h1>

      <h2>🧠 How to Remember Props</h2>
      <p>“Props” is short for properties – think of them as arguments you pass to a component.</p>
      <p>
        Example: <code>{`<Greeting name="Bizz" />`}</code>
      </p>
      <p>
        → Inside the <code>Greeting</code> component, we can access the <code>name</code> via <code>props.name</code> or using destructuring: <code>{`({ name })`}</code>.
      </p>

      <h2>📌 Examples of Props in Action</h2>

      {/* Example 1 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 1: Passing a String as Prop</h3>
        <p>Pass data into a child component and display it.</p>

        <Greeting name={userName} />

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`function Greeting({ name }) {
  return <h4>Hello, {name || "friend"}!</h4>;
}

// Usage:
<Greeting name="Bizz" />`}</code>
          </pre>
        </div>
      </section>

      {/* Example 2 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 2: Conditional Rendering with Boolean Prop</h3>
        <p>Change what’s displayed based on prop value.</p>

        <StatusMessage isOnline={online} />

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`function StatusMessage({ isOnline }) {
  return <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>;
}

// Usage:
<StatusMessage isOnline={true} />`}</code>
          </pre>
        </div>
      </section>

      {/* Example 3 */}
      <section className="wrapper" style={{ marginTop: "2rem" }}>
        <h3>Example 3: Rendering a List from Array Prop</h3>
        <p>Map through an array passed in as a prop.</p>

        <TodoList tasks={tasks} />

        <div style={{ marginTop: "1rem", background: "#201f1f", padding: "1rem", borderRadius: "8px" }}>
          <strong>Code:</strong>
          <pre>
            <code>{`function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  );
}

// Usage:
<TodoList tasks={["Buy milk", "Walk dog", "Deploy project"]} />`}</code>
          </pre>
        </div>
      </section>

      <Link className="link-home" to="/" style={{ display: "inline-block", marginTop: "2rem" }}>
        ← Back to projects
      </Link>
    </>
  );
}
