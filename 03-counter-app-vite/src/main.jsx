import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';



//Se renderiza el componente App en el elemento con id root
//En strict mode
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
);







