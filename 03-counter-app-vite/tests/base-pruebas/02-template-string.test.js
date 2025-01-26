import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el 02-template-String', () => { 

    test('getSaludo debe de retornar "Hola fede"', () => { 

        const name  = 'Fede'
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);

    })

 })