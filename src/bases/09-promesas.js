import { getHeroById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         //importar el getHeroById de 08-imp-exp.js
//         const heroe = getHeroById(2);
//         resolve(heroe);
//         // reject('no se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('tenemos el heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            //importar el getHeroById de 08-imp-exp.js
            const heroe = getHeroById(id);
            (heroe) ? resolve(heroe) : reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then(console.log) //imprime el primer argumento por Default del resolve
    .catch(console.warn); //imprime el primer argumento por Default del reject