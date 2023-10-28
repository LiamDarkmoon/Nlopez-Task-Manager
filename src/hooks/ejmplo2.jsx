/**
 *Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

 import React, { useState, useRef, useEffect } from 'react';
 import PropTypes from 'prop-types';
 
 
 const Ejmplo2 = () => {

    //Crear 2 contadores distintos
    //Cada uno con estado propio
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //Crear con useRef() una referencia para asociar una variable
    //a un elemento del DOM del componente
    const miRef = useRef();

    function incrementar1(params) {
        setcontador1(contador1 + 1);
    }

    function incrementar2(params) {
        setcontador2(contador2 + 1);
    }

    /**
     * Trabajando con useEfect()
     */

    /**
     * ? caso 1: Ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecula aquello que se encuentre en useEffect()
     */

    //useEffect(() => {
    //    console.log("cambio en el estado del componente");
    //    console.log("mostrando referencia a elemento del DOM");
    //    console.log(miRef);
    //});

    /**
     *  ? caso 2: Ejecutar solo cuando cambie el 1er contador y en el 2do contador
     * cada vez que haya un cambio en contador1 se ejecuta lo que diga useEffect()
     * en caso de cambios en contador2 no habra ejecucion
     */
    useEffect(() => {
        console.log("cambio en el estado del contador1");
        console.log("mostrando referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2])



    return (
        <div>
            <h1>*** Ejemplo de useRef() y useEffect() ***</h1>
            <h2>CONTADOR1: {contador1}</h2>
            <h3>CONTADOR2: {contador2}</h3>
            {/* elemento referenciado */}
            <h4 ref={miRef}>
                Tu vieja
            </h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={ incrementar1 }>sumar 1</button>
                <button onClick={ incrementar2 }>sumar 2</button>
            </div>
        </div>
    );
 };
 
 
 Ejmplo2.propTypes = {
 
 };
 
 
 export default Ejmplo2;
 