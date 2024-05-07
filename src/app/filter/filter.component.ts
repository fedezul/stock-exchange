import { Component, EventEmitter, Output } from '@angular/core';
import { ChartDataset } from 'chart.js';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent{

   public LineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Option1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Option2' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Option3' }
  ];
   public data = this.LineChartData

   public filterOptions = ['Option1', 'Option2', 'Option3'];
   public selectedOption = '';

   @Output() newData= new EventEmitter<ChartDataset[]>();


  filterChart() {
    if (this.selectedOption != "") {
      this.data = this.LineChartData.filter(item => item.label === this.selectedOption);
    } else {
      

      this.data = this.LineChartData;
    }

    this.newData.emit(this.data);
  }
}
