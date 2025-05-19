import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>React Playground Snippets</h1>
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
    </>
  );
}
