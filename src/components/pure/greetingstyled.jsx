import React, { useState } from 'react';

//definimos estilos en constantes:

//estilos usuario logeado
const loggedStyle = {
    color: "white"

}

//estilo usuario deslogeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {

    const [logged, setLogged] = useState(false)



    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            <p>Hola, { props.name }</p>
            <button onClick={()=>{
                console.log('boton logeado')
                setLogged(!logged);
            }}>
                { logged ? 'logout' : 'login'}
            </button>

            
        </div>
    );
}

export default Greetingstyled;
