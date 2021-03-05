// graphique-region.ts 
// Par Charles-Etienne Villemure
// Le 4 Mars 2021

import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphique-nombres-voyageurs',
  templateUrl: './graphique-nombres-voyageurs.component.html',
  styleUrls: ['./graphique-nombres-voyageurs.component.css']
})
export class GraphiqueNombresVoyageursComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['1 Voyageurs', '2 Voyageurs', '3 Voyageurs', '4 Voyageurs', '5 Voyageurs', '6+ Voyageurs'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#d13537', '#b000b5', 'red','blue','yellow','green']
    }
]

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 40, 12, 56, 55]},
  ];

  constructor() { }

  ngOnInit() {
  }
}