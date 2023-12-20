const ItemDetail = ({ producto }) => {
  return (
    <div>
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
    </div>
  )
}

export default ItemDetail