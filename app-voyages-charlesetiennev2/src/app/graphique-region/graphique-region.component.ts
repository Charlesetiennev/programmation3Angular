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
   @Input() reservations: Reservations [];


  
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Europe','Asie','Sud','Grand nord'];
  public pieChartData: SingleDataSet = [20, 25, 30,25];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array < any > = [{
    backgroundColor: ['red', 'yellow', 'blue','green'],
 }];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit():void {
    this.getIdeas();
  }
  getIdeas():void{
    // console.log(this.reservations.length)
    console.log(this.reservations);
  }
}

