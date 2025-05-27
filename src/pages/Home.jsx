import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>React Playground Snippets</h1>
      <p>A collection of interactive React components exploring key frontend patterns — from state and routing to effects and custom hooks.</p>

      <li>
        <Link to="/components/useState/Counter">🧮 Counter</Link>
      </li>
      <li>
        <Link to="/components/useState/UseStateBasics">UseStateBasics</Link>
      </li>
      <li>
        <Link to="/components/useState/TrainerShop">👟 Trainer Shop</Link>
      </li>
      <li>
        <Link to="/components/useState/LikeButton">❤️ Like Btn </Link>
      </li>
      <li>
        <Link to="components/PropsAndComponents/PropsAndComponents"> Prop Basics </Link>
      </li>
    </>
  );
}
