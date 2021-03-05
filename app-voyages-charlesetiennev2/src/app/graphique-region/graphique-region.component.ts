// graphique-region.ts 
// Par Charles-Etienne Villemure
// Le 4 Mars 2021

import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Reservations } from '../reservations';
@Component({
  selector: 'app-graphique-region',
  templateUrl: './graphique-region.component.html',
  styleUrls: ['./graphique-region.component.css']
})
export class GraphiqueRegionComponent implements OnInit {
  @Input() reservations: Reservations[]
 
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnChanges(changes: any){
    const thingsWithDuplicates = this.reservations;
    const distinctThings = thingsWithDuplicates.filter(
      (thing, i, arr) => arr.findIndex(t => t.destination === thing.destination) === i
    );
    console.log(distinctThings);
    let distinctDestination : Label[] =  [];
    distinctThings.forEach(element => {
      distinctDestination.push(element.destination);
    });
    console.log(distinctDestination);
    this.pieChartLabels= distinctDestination;
  }
  ngOnInit():void {
  }
    // Pie
    public pieChartOptions: ChartOptions = {
      responsive: true,
    };
    public pieChartLabels: Label[] =  [];
    public pieChartData: SingleDataSet = [20, 25, 30, 25];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors: Array < any > = [{
      backgroundColor: ['red', 'yellow', 'blue','green'],
   }];  
}

