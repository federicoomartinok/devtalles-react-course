const activo = true;

// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';

//Esta bueno en react cuando hay que mostrar algo si una conficion se cumple
const mensaje = activo && 'Activo'; 

console.log(mensaje);