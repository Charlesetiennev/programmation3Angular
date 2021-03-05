import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'filterEtoiles'
})
export class FilterEtoilesPipe implements PipeTransform {
  transform(forfaits: Forfait[], nombreEtoile:number): Forfait[] {
    console.log(nombreEtoile);
    // 
    if(nombreEtoile!= null){
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles <= nombreEtoile);
  }
  else{
    return forfaits;
  };
// if ici


  }
// Arriver a changer la valeur du filter avec valeur nombreEtoile du formulaire


  // 
}