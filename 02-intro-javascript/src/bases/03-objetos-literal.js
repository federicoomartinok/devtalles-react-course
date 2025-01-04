const persona = {
    nombre: 'Fede',
    apellido: 'Lopez',
    edad: 25,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 1234,
        lat: 14.3232,
        lng: 34.923332
    }
};

console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Peter';