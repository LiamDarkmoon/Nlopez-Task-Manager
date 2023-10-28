/**
 * Ejemplo de componente de classe
 * dispone de los methodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log("CONSTRUCTIOR: Cuando se instancia el componente")
    }

    componentWillMount() {
        console.log("WillMount: antes del montaje del componente")
    }

    componentDidMount() {
        console.log("DidMount: Cuando se monta el componente")
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Cuando se reciven propiedades en el componente")
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: justo antes de actualizar el componente")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: justo despues de actualizar el componente")
    }

    componentWillUnmount() {
        console.log("WillUnmount: justo antes de desmontar el componente")
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;