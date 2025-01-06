import heroes,{owners} from "../data/heroes";


// console.log(owners)


// find devuelve solo el heroe que tiene el id que se le pasa
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2))

//filter devuelve solo los que son de DC
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'))