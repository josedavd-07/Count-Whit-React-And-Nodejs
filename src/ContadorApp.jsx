import React from 'react'
import './styles/ContadorApp.css'
import { useState } from 'react'

// rafc  React Arrow Component Function
// Aca si lo hacempos dentro de la funcion esto pasara al padre directamente
// Funcion handleClick es conducir click en ingles y se encarga de manejar el evento
// La forma mas optima de hacerlo es igualar la funcion a u na constante y a una funcion flecha
// Importamos useState para poder modificar el estado de la variable value
export const ContadorApp = ({ value }) => {

    //useState es un hook que nos permite modificar el estado de una variable
    const [contador, setContador] = useState(value)

    // Usamos el contador  mas set contador para modificar el estado de la variable 
    const handleClick = () => {
        setContador(contador + 1)
    }

    //Reemplazamos value por contador para ahora si modificar el estado de la variable 
    return (
        <>
            <h1>Contador:</h1>
            <p>{contador}</p>
            <p id="Color-Parrafo">Como pudiste observar, cada vez que damos enter a nuestro boton cambiamos
                el estado de nuestro contador<br />
                sumandole 1 a nuestro valor por default  de nuestro Contador  </p>
            <hr />
            <button onClick={handleClick}>
                Soy un botón
            </button>
            <footer class="ajustar-footer">
                <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}
