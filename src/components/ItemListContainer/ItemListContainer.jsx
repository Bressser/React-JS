import { useEffect, useState } from "react";

import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import useCargando from "../../hooks/useCargando";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

const ItemListContainer = ({ Bienvenido }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams ()
    useEffect(()=> {
      obtenerProductos
        .then ((respuesta) => {
          if(categoria){
            const productosFiltrados = respuesta.filter((producto)=> producto.categoria === categoria)
            setProductos(productosFiltrados)
          }else{
            setProducto (respuesta);
          }
        })
        .catch ((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Finalizo la promesa");
        });
    },[categoria]);

  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } =
    useCargando();

  useEffect(() => {
    mostrarCargando()

    obtenerProductos
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        ocultarCargando()
      });
  }, []);

  return (
    <>
      {cargando ? (
        pantallaDeCarga
      ) : (
        <div className="item-list-container">
          <p className="Bienvenido a ELGato!">{Bienvenido}</p>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;