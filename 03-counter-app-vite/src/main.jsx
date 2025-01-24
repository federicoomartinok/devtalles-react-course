import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';



//Se renderiza el componente App en el elemento con id root
//En strict mode
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola soy Fede" subTitle='Full-Stack developer'/> */}
        {<CounterApp value={5}/>}
    </React.StrictMode>
);







