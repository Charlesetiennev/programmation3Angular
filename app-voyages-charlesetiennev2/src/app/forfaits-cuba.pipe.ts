import { Pipe, PipeTransform } from '@angular/core';
import {Forfait} from './forfait';

@Pipe({
  name: 'forfaitsCuba'
})
export class ForfaitsCubaPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.destination == 'Cuba');
  }

}
