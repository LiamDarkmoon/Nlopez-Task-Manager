import React, { useRef } from 'react';

const Child = ({ name, send, change }) => {

    const nameRef = useRef('')

    function pressButton() {
        alert('que tocas bobo?... anda palla')
    }

    function pressButtonParams(text) {
        alert(`text ${text}`)
    }

    let textCapture = ''

    function submitName(e) {
        e.preventDefault();
        change(nameRef.current.value);
    }

    return (
        <div>
            <p onMouseOver={() => console.log('mous over')}>Este es un terrible capo { name }</p>
            <button onClick={() => console.log('boton 1 pulsado')}>boton 1</button>
            <button onClick={pressButton}>tocame</button>
            <button onClick={() => pressButtonParams('mentira....colgala')}>boton turro</button>
            <button onClick={() => send('hola trolaso')}> send Message</button>
            <input placeholder='Escribi lo que te salga de los huevos aca pa ....' 
                onFocus={() => console.log('lalalal')}
                onChange={(e) => {
                    textCapture = e.target.value
                    console.log(e.target.value)
                    }}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        <p> { textCapture } </p>
                    }
                }
                }
            />
            <div style={{margin: '50px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Camilo Lopez'/>
                    <button type='submit'>Change name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
