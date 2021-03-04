const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 34534534,
        lat: 14.2332423,
        lng: 44.3434234
    }
};


// console.table(persona);

//spread operator
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);