// primer hook, si tiene use es un hook
import { useState } from 'react';
import PropTypes from "prop-types";

export const CounterApp = ({value})=> {

    //cambia el estado del contador
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        // setCounter(counter + 1 );
        setCounter((c) => c + 1)    
    }
    const handleSubstract = () => {
        setCounter(counter - 1 );
        if(counter === 0){
            setCounter(value);
        }
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            {/* si solo mandamos event se puede omitir el parametro y la func */}
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>


        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}