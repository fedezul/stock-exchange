import { Component, EventEmitter, Output } from '@angular/core';
//import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.css'
})
export class DateFilterComponent {
  public LineChartData: ChartDataset[] = [ 
    { data: [65, 59, 80, 81, 56, 55, 40,78,28,19,90,53], label: 'Option1' },
   { data: [28, 48, 40, 19, 86, 27, 90,60,58,78,9,44,13], label: 'Option2' },
   { data: [18, 48, 77, 9, 100, 27, 40,38,8,69,70,23], label: 'Option3' }
  ];
   public data = this.LineChartData
  filteredData: ChartDataset[]=[];

  @Output() newDate= new EventEmitter<ChartDataset[]>();

  constructor(){
    this.filteredData=this.data;
  }

  /*dateFilter(event:MatDatepickerInputEvent<Date>){

    const selectedDate= event.value;

    this.filteredData=this.data.filter(dati=>{
      return
    })
  }
*/
  
  
}
