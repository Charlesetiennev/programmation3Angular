// Pipe forfait vedette
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Pipe, PipeTransform } from '@angular/core';
import {Forfait} from './forfait';
@Pipe({
  name: 'forfaitVedette'
})
export class ForfaitVedettePipe implements PipeTransform {
  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.forfaitVedette == true);
  }

}
