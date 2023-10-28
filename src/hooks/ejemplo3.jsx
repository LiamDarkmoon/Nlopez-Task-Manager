/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va a tener un valor que recibe del padre
 */

//inicializamos un estado vacio que se rellenara con los datos del padre
const miContexto =React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es : {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
};

const Componente2 = () => {


    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es : {state.sesion}
            </h2>
        </div>
    );
};


const ComponenteConContexto = () => {

    const initialState = {
        token: "165481",
        sesion: 1
    }

    //creamos el estado del componente
    const [sessiondata, setsessiondata] = useState(initialState)

    function refreshSesion() {
        setsessiondata(
            {
                token: "56413854351684",
                sesion: sessiondata.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessiondata}>
        {/* todo lo que esta aca dentro puede acceder a la info de sessiondata */}
        {/* ademas de actualizar dicha informacion en tiempo real */}
        <h1> *** Ejemplo de useState() y useContext() *** </h1>
        <Componente1></Componente1>
        <button onClick={refreshSesion}>actualizar</button>
        </miContexto.Provider>
    );
};



export default ComponenteConContexto;
