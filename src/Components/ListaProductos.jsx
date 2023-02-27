// import React from 'react';
// import axios from 'axios'
// import { useState, useEffect } from 'react';

// const ListaProductos = () => {

// const [productos, setProductos] = useState([]);


// //PASO 1
//  useEffect(() => {
// // TRAEMOS LOS DETALLES DE LA API
// //HACEMOS LA PETICION CON AXIOS
//  axios.get('https://peticiones.online/api/products')
//  //NOS DEVUELVE UNA RESPUESTA CORRECTA 
//  //LUEGO DENTRO DE LA RESPUESTA CORRECTA ACTUALIZAMOS EL ESTADO DE ESA RESPUESTA 
//  //SE GUARDA EN LA VARIABLE PRODUCTOS 
// .then(response => setProductos(response.data.data))
// .catch(error => console.log(error));
//  }, []);

// //PASO 1 PRIMERO RENDERIZA EL JSX DEL COMPONENTE
//  return <div className="productos">
//     {productos.map(producto => (
//         <div>
//             <p>{producto.name}</p>
//         </div>
//     ))}
//     </div>
// }

// export default ListaProductos;