import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("componente creado")

        const intervalID = setInterval(() =>{
            document.title = ${ new Date() }
            console.log("actualizacion del componente")
        }, 1000);

        return () => {
            console.log("justo antes de desaparecer");
            document.title = "el tiempo se ha detenido";
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
