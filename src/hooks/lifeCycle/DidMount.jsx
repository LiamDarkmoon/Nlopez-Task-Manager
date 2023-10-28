/**
 * Ejemplo de uso del metodo de ciclo de vida en componente classe
 * y el hook en componente funsion
 * 
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log("comportamiento antes de renderizarse")
    }

  render() {
    return (
      <div>
            <h1>DID MOUNT</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log("comportamiento antes de renderizarse");
    }, [])

    return (
        <div>
            <h1>DID MOUNT</h1>
        </div>
    );
}


