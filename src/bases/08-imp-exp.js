//Import,Export y funciones arreglos
// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'
import heroes from '../data/heroes';

// console.log(owners);

// const getHeroById = (id) => {
//     // return heroes.find(heroes => heroes.id === id);
//     return heroes.find((heroe) => {
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// };
export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroById(25));

export const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroByOwner('DC'));
