// // https://api.mercadolibre.com/items/MLA1136716168

// import React, { useState, useEffect } from 'react'

// function Probando() {
// //GUARDA EL ESTADO EN EL QUE ESTA MI ELEMENTO
// const [ product , setProducto ] = useState([]);

// useEffect( () => {
// // console.log('useEffect')
// // setEquipo(datos) // llamando y va a verse los datos infinitas veces
// ObtenerDatos();
// },[]);


// //generamos la funcion async funcion flecha
// const ObtenerDatos = async() => {
// //await fech llamamos a la api
// const datos = await fetch ("https://api.mercadolibre.com/sites/MLA/categories")
// //Ahora que tenemos dato tenemos que transformarla
// const product = await datos.json();
// //aca se guarda el formato json
// // console.log(producto)
// setProducto(product)

// }

// return (
// <div>
// <h1>Probando api</h1>    
//        <ul>
//         { product.map(items => (
//         <li key= {items.id}> {items.name} </li>))}
//        </ul>       
// </div>
// );
// }

// //en api siempre importar desde aca
// export default Probando;