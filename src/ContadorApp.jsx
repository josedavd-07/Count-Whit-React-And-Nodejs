import React from 'react'
import './styles/ContadorApp.css'

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
function handleClick(event) {
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
