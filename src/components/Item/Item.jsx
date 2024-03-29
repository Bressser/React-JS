import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {

  console.log("re-render de:", producto.nombre)

  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">Ver detalles</Link>
    </div>
  );
};

export default Item