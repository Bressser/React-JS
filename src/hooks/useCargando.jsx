import { useState } from "react"

const useCargando = ()=>{
  const [cargando, setCargando] = useState(true)

  const mostrarCargando = () => setCargando(true)

  const ocultarCargando = () => setCargando(false)

  const pantallaDeCarga = <div>Cargando...</div>

  return { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga }

}

export default useCargando