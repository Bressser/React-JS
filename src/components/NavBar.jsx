import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div id="navbar">
        <h1>ElGato</h1>
        <ul>
            <li>
                <a href="#">Stream Deck</a>
            </li>
            <li>
                <a href="#">Iluminacion</a>
            </li>
            <li>
                <a href="#">Camaras</a>
            </li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar