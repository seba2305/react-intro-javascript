//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 40,
    clave: 'Iron Man'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.log(nombre, edad ,rango);
    return  {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.23,
            lng: 34.6654
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat,lng);