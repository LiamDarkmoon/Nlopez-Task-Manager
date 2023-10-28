/**
 * Ejemplo de de uso del metodo de DidUpdate en componentes de classe
 * y componentes funsionales
 */

import React, { Component, useEffect } from 'react'

export class DiDUpdate extends Component {

    componentDidUpdate(){
        console.log("comportamiento cuando el componente recive un cambio de estado o props")
    }

  render() {
    return (
      <div>
        <h1>DID UPDATE</h1>
      </div>
    )
  }
}


import React from 'react';

export const DiDUpdatehook = () => {

    useEffect(() => {
        console.log("comportamiento cuando  recive un cambio")
    })

    return (
        <div>
            <h1>DID UPDATE</h1>
        </div>
    );
}
