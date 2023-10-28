/*Ejemplo de uso del hook useState
Crear un componente funsional y acceder a su estado privado a travez de un hook
y poder modificarlo*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre : "Nahuel",
        email : "liamdarkmoon@gmail.com"
    }

    /*QUEREMOS QUE EL VALOR INICIAL Y PERSONA INICIAL SEAN PARTE DEL ESTADO DEL COMPONENTE
    PARA ASI PODER GESTIONAR SU CAMBIO Y QUE ESTE SE VEA REFLEJADO EN LA VISTA DEL COMPONENTE*/

    /*const [nombreVariable, funcionParaCambiar] = useState(valorInicial)*/

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    
    /**
     * Funsion para actualizar el estado privado del contador
     */
    function incrementarContador() {
        // ? funsionParaCambiar(nuevoValor) 
        setContador(contador + 1);
    }


    /**
     * 
     * @param {string} nombre 
     */
    function cambiarPersona(nombre) {
        setPersona(
            {
                nombre: "camilo",
                email: "camilo@gmail.com"
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* BLOQUE DE BOTONES */}
            <div>
                <button onClick={ incrementarContador }>CONTAR</button>
                <button onClick={ cambiarPersona }>CAMBIAR PERSONA</button>
            </div>
        </div>
    );
};


Ejemplo1.propTypes = {

};


export default Ejemplo1;
