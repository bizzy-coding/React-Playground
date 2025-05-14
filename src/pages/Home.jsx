import { Link } from "react-router-dom";    

export default function Home() {

    return (
        <>
        <h1>React Playground Snippets</h1>
        <li><Link to="/components/useState/Counter">🧮 Counter</Link></li> 
        </>
    )
}