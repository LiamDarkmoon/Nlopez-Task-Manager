import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Nahuel');

    function showMessage(text) {
        alert(`Message received ${text}`)
    }

    function changeName(newName) {
        setName(newName)
    }

    return (
        <div>
            <Child name={name} send={showMessage} change={changeName}></Child>
        </div>
    );
}

export default Father;
