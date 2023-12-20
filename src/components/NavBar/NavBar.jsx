import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./NavBar.css";

const NavBar = () => {
return (
    <div id="navbar">
        <h1 id="brand">ElGato</h1>
        <ul>
            <li>
                <Link to="/categorias/Decks">Stream Deck</Link>
            </li>
            <li>
                <Link to="/categorias/Iluminacion">Iluminacion</Link>
            </li>
            <li>
                <Link to="/categorias/Camaras">Camaras</Link>
            </li>
        </ul>
        <CartWidget />
    </div>
)
}

export default NavBar