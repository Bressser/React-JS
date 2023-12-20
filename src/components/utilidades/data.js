const productos = [
    {
        id: "DECK1",
        nombre: "Stream Deck XL",
        descripcion: "Con 32 teclas LDC personalizables listas para lanzar un número ilimitado de acciones con una pulsación: el Stream Deck XL lleva el control de realización a un nuevo nivel.",
        stock: 15,
        precio: 351,
        imagen: "",
        categoria: "Decks",
    },
    {
        id: "DECK2",
        nombre: "Stream Deck MK.2",
        descripcion: "Stream Deck tiene 15 teclas LCD personalizables para controlar apps y plataformas. Visita la Elgato Marketplace si quieres plug-ins para apps, iconos, canciones y efectos, y renueva tu equipo con los paneles frontales intercambiables.",
        stock: 20,
        precio: 200,
        imagen: ",",
        categoria: "Decks",
    },
    {
        id: "LIGHT1",
        nombre: "Ring Light",
        descripcion: "Diseñada para realzar la piel, eliminar sombras y dar a los ojos ese brillo especial sin reflejos. Elgato Ring Light te ayuda a dominar la iluminación de proximidad.",        
        stock: 5,
        precio: 55,
        imagen: "",
        categoria: "Iluminacion",
    },
    {
        id: "LIGHT2",
        nombre: "Key Light AIR",
        descripcion: "Un panel LED de pequeño tamaño con iluminación perimetral controlable mediante app: Key Light Air ofrece una combinación ideal de iluminación, flexibilidad y comodidad.",
        stock: 2,
        precio: 105,
        imagen: "",
        categoria: "Iluminacion",
    },
    {
        id: "CAM1",
        nombre: "Face CAM",
        descripcion: "Presentamos Facecam: óptica profesional en formato webcam. Diseñada a la perfección para que salgas de lujo.",
        stock: 25,
        precio: 86,
        imagen: "",
        categoria: "Camaras",
    },
    {
        id: "CAM2",
        nombre: "Face CAM PRO",
        descripcion: "Con óptica superior que graba imagen a 4K60 real y un software potente para lograr fácilmente el aspecto que quieres: Facecam Pro es un salto enorme en la tecnología de las webcams.",
        stock: 10,
        precio: 500,
        imagen: "",
        categoria: "Camaras",
    },
];


const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos