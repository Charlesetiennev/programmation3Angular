import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'filterEtoiles'
})
export class FilterEtoilesPipe implements PipeTransform {
  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles <= 5);
  }
// Arriver a changer la valeur du filter avec valeur nombreEtoile du formulaire
  if (condition) {
    
  }
}