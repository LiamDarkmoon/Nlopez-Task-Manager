/**
 * Ejemplo de uso del metodo WillUntount para componente classe
 * y ejemplo de uso de hooks para componente funsional
 */

import React, { Component,useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log("justo antes de desaparecer")
    }

  render() {
    return (
      <div>
        <h1>Will Unmount</h1>
      </div>
    )
  }
}

export const WillUnmounthook = () => {

    useEffect(() => {
        return () => {
            console.log("justo antes de desaparecer")
        };
    }, [])

    return (
        <div>
            
        </div>
    );
}


