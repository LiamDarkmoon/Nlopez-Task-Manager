/**
 * Ejemplo para entender el uso de los props.children:
 */

import React from 'react';
import PropTypes from 'prop-types';


const Ejemplo4 = (props) => {
    return (
        <div>
            <h1> *** Ejemplo de props.children ***</h1>
            <h2>
                NOMBRE: { props.nombre }
            </h2>
            {props.children}
        </div>
    );
};


Ejemplo4.propTypes = {

};


export default Ejemplo4;
