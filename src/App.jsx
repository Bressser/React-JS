import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='app'>
      <NavBar/>
      <ItemListContainer Bienvenido="Bienvenido a ElGato"/>
      </div>

    </>
  )
}

export default App
