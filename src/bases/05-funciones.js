//Funciones en JS

// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Seba'))

console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

const getUser = () => ({
    uid: 'adsd213',
    username: 'ELAdmin',
})


console.log(getUser());

//TAREA OK
//1. transformen a funcion de flecha
//2. tiene que retornar objeto implicito
//3. pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'asd123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Seba');
console.log(usuarioActivo);