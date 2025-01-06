const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);

const [, ,p1] = personajes;

console.log(p1);


const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornarArreglo();
console.log(letras,numeros);


// Tarea
//1.nombre
//2.setNombre
const useState = (valor) =>{
    return[valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('Goku');
setNombre();