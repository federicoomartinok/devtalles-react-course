const saludar = function (nombre){
    return `Hola,${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola,${nombre}`;
}

const saludar3 = (nombre) => `Hola,${nombre}`;

const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Mundo'));



const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

//sin return
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})


// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
}) 

const usuarioActivo = getUsuarioActivo('Federico');

console.log(usuarioActivo);