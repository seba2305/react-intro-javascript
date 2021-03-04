//Desestructuracion Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. el primer valor del arreglo se llamara nombre
//2. el segundo se llamara setNombre
const _useStatee = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = _useStatee('Goku');
console.log(nombre);
setNombre();
