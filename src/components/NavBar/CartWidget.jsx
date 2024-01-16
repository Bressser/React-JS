import "./NavBar.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext)
  return (
    <div id="cartwidget">
        <img src="/img/Cart.png" alt=""/>
      { carrito.length !== 0 && <p>{totalCantidad}</p> }
    </div>
  )
}

export default CartWidget