const arreglo = [1,2,3,4];

//... es para copiar el array anterior pero con el nuevo valor
//operador spread para copiar el array anterior y agregar un nuevo valor
let arreglo2 = [...arreglo, 5];


const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;

});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);