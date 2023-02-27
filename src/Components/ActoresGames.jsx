import {useState, useEffect } from 'react'
import axios from 'axios'

function ActoresGame() {
    const [actores, setListadoActores] = useState ([])
    console.log(actores);

    useEffect(() => {

        const obtenerPersonajes = async () => {
            const url = 'https://thronesapi.com/api/v2/Characters';
            const result = await axios.get(url);
            setListadoActores(result.data)
        }
     
        obtenerPersonajes()
    }, []);

    return(
        <div>
            <h1>ACTORES GAME OF TRONE</h1>
            <ul>

                {actores.length === 0 && <p>Cargando...</p>}

                {
                actores.map((personas, i) => {
                    return (
                        <li key={i}>
                            <h4> Nombre: {personas.fullName}</h4>
                        <img src={personas.imageUrl} alt="Imagenes"
                        width='200' />
                       <h5>{personas.family}</h5>
                        </li>
                    )
                } 
                
                )}
            </ul>
        </div>
    )
}

export default ActoresGame;