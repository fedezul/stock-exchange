import { Component, Input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { GraphComponent } from '../graph/graph.component';
import { ChartDataset } from 'chart.js';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  providers:[provideNativeDateAdapter()],
})
export class FilterComponent{
  @Input() lineChartData:ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Azione Finanziaria A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Azione Finanziaria B' }
  ];
 title='chart-filter';
 lessThen0GratterThen='lessThen';
 filterLimit=100;
 //lineChart;
 charData=this.lineChartData;
  

 /*applyFilter(value){
  console.log(this.charData.);
 }*/
}
