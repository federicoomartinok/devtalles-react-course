import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    //document.createElement...Bla bla bla
    return <h1>Hola Mundo!!</h1>;
}

//Se renderiza el componente App en el elemento con id root
//En strict mode
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);







