import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(29)

    const birthday = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Aprendiendo con {props.name} Componentes funcionales
            </h1>
            <h2>
                Las veces que te cuernearon fueron: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    cuernear
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;

