import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-graphique-region',
  templateUrl: './graphique-region.component.html',
  styleUrls: ['./graphique-region.component.css']
})
export class GraphiqueRegionComponent implements OnInit {
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

  ngOnInit() {
  }
}

