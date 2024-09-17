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





/**********************************************************************/
/**********************************************************************/

//APARTADO QUE FUE USADO PARA EL APRENDIZAJE  DE LOS EVENTOS EN REACT Y APRENDER LAS BASES
//PERO NO SE USA EN EL PROYECTO FINAL

/**********************************************************************/
/**********************************************************************/

// Conducir Click Event
//Esta seria la forma de hacerlo con una función cuando hay un solo argumento o mas
/*function handleClick(event) {
    console.log(event)
}
*/
/*
export const ContadorApp = () => {
    return (
        <>
            <h1>Contador</h1>
            <hr />
            <button onClick={(event) => handleClick(event)} >
                Soy un botón
            </button>
        </>
    )
}
*/


// Conducir Click Event
/*
function handleClick(event) {
    console.log(event)
}
export const ContadorApp = () => {
    return (
        <>
            <h1>Contador</h1>
            <hr />
            <button onClick={handleClick} > // Aqui se llama la función  y tambiern pasa elñ elemento event
                Soy un botón
            </button>
        </>
    )
}
*/

//Esta serrio la frma para mas argumentos
// Conducir Click Event
/*
//De esta manera se puede pasar mas  de un argumentos a lafunción.
function handleClick(event,arg) {
    console.log(event)
    console.log(arg)
}
export const ContadorApp = () => {
    return (
        <>
            <h1>Contador</h1>
            <hr />
            <button onClick={(event) => handleClick(event,'Aca recibimos otro argumento')} >
                Soy un botón
            </button>
        </>
    )
}
*/

// Forma de hacerlo pero con todo desde afuera de la función
/*
function handleClick(event) {
    console.log(event)
    console.log(arg)
}

const Button = ({ onClick }) => {
    return (
        <button onClick={handleClick} >
            Soy un botón
        </button>
    )
}

export const ContadorApp = () => {
    return (
        <>
            <h1>Contador:</h1>
            <hr />
            <Button></Button>
        </>
    )
}
*/

// Manera de hacerlo mas comunmente pero todo adentro pero mas orgamnizado
// Funcion que conduce el click o manejar click con el evento en ingles
// Esta funcion se puede pasar al padre y no desde afuera para que sea mas limpio
/*
function handleClick(value) {
    value += 1
    console.log(value)
}
/*

// Componente que se encarga de mostrar el boton retornando el boton desde la función
//Hacemos lo que se llama desestructuración de argumentos para hacerlo mas limpio y facil de entender
//Esto aca se puede hacer mas optimo para que los registros nose hagan desde afuera del componente
/*
export const ContadorApp = ({ value }) => {
    return (
        <>
            <h1>Contador:</h1>
            <p>{value}</p>
            <hr />
            <button onClick={() => handleClick(value)} >
                Soy un botón
            </button>
        </>
    )
}
*/


// rafc  React Arrow Component Function
// Aca si lo hacempos dentro de la funcion esto pasara al padre directamente
// Funcion handleClick es conducir click
/*
export const ContadorApp = ({ value }) => {
    function handleClick() {
        value += 1
        console.log(value)
    }

    return (
        <>
            <h1>Contador:</h1>
            <p>{value}</p>
            <hr />
            <button onClick={handleClick}>
                Soy un botón
            </button>
        </>
    )
}   
*/