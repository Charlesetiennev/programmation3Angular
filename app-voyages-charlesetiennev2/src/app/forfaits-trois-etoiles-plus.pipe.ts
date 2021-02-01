import { Pipe, PipeTransform } from '@angular/core';
import {Forfait} from './forfait';

@Pipe({
  name: 'forfaitsTroisEtoilesPlus'
})
export class ForfaitsTroisEtoilesPlusPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles >= 3);
  }
}
