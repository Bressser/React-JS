import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./NavBar.css";

const NavBar = () => {
return (
    <div id="navbar">
        <Link to="/" className="brand">
            <img src="/img/elgatofavicon.png" alt="Logo ElGato"/> 
        </Link>
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
    );
};

export default NavBar