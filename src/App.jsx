import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error"
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import NavBar from "./components/NavBar/NavBar"

import "./App.css";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a ElGato" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Bienvenidos a ElGato" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;