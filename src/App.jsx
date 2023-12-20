import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div id='app'>
      <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer Bienvenido="Bienvenido a ElGato"/>} />
        <Route path="/categorias/:categoria" element={<ItemListContainer Bienvenido="Bienvenido a ElGato"/>} />
        <Route path="/detalle/:id" element= {<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
