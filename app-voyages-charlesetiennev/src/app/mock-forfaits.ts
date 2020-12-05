// Mock-forfait
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020
import {Forfait} from './forfait';

export const FORFAITS: Forfait[]  = [
    {
        destination : 'Punta Cana',
        villeDeDepart: 'Montreal',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 1200,
        rabais: 175,
        forfaitVedette : false,
        hotel:{
            nomHotel: 'Puncacayo',
            coordonees: '1332 Lucy Lane',
            nombreChambres: 100,
            nombreEtoiles : 2,
            caracteristiques: ['Face à la plage','Ascenseur','Plage']
        }
    },
    {
        destination : 'Costa Rica',
        villeDeDepart: 'Quebec',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 1720,
        rabais: 0,
        forfaitVedette : true,
        hotel:{
            nomHotel: 'Santa le grino',
            coordonees: '1597 Twin House Lane',
            nombreChambres: 200,
            nombreEtoiles : 2,
            caracteristiques: ['Adulte seulement','Bar','Internet','Mariages','Face à la plage']
        }
    },
    {
        destination : 'Cuba',
        villeDeDepart: 'Montreal',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 999,
        rabais: 70,
        forfaitVedette : true,
        hotel:{
            nomHotel: 'Relaxing sun',
            coordonees: '3969 Deer Haven Drive',
            nombreChambres: 200,
            nombreEtoiles : 1,
            caracteristiques: ['Miniclub','Buffet','Service en Francais','Dans un lieu situé à proximité d\'un parc/lieu naturel']
        }
    },
    {
        destination : 'Colombie',
        villeDeDepart: 'Quebec',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 1000,
        rabais: 0,
        forfaitVedette : false,
        hotel:{
            nomHotel: 'El cartelo',
            coordonees: '2403 Cherry Ridge Drive',
            nombreChambres: 100,
            nombreEtoiles : 3,
            caracteristiques: ['Plage','Adulte seulement','Mariages','Buffet']
        }
    },
    {
        destination : 'Venuzuela',
        villeDeDepart: 'Montreal',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 1440,
        rabais: 0,
        forfaitVedette : true,
        hotel:{
            nomHotel: 'Costco Inn',
            coordonees: '898 Lightning Point Drive',
            nombreChambres: 200,
            nombreEtoiles : 4,
            caracteristiques: ['Plage','Mariage','Internet']
        }
    },
    {
        destination : 'Chili',
        villeDeDepart: 'Quebec',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 2200,
        rabais: 300,
        forfaitVedette : false,
        hotel:{
            nomHotel: 'Alibaba sunset',
            coordonees: '1948 Fleming Way',
            nombreChambres: 100,
            nombreEtoiles : 3,
            caracteristiques: ['Face à la plage','Plage']
        }
    },
    {
        destination : 'Haiti',
        villeDeDepart: 'Montreal',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 1175,
        rabais: 0,
        forfaitVedette : false,
        hotel:{
            nomHotel: 'Soleil de l\'ile',
            coordonees: '3639 Collins Avenue',
            nombreChambres: 200,
            nombreEtoiles : 5,
            caracteristiques: ['Internet','Dans un lieu situé à proximité d\'un parc/lieu naturel','Ascenseur','Miniclub','Mariages','Service en Francais','Buffet']
        }
    },
    {
        destination : 'Mexique',
        villeDeDepart: 'Quebec',
        dateDeDepart: '2020-11-17',
        dateDeRetour: '2020-11-25',
        prix : 3025,
        rabais: 1025,
        forfaitVedette : true,
        hotel:{
            nomHotel: 'El mucho soleillo',
            coordonees: '3743 Tator Patch Road',
            nombreChambres: 100,
            nombreEtoiles : 3,
            caracteristiques: ['Ascensuer','Miniclub']
        }
    },
]