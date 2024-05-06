import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ChartDataset, ChartOptions } from 'chart.js';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  apiData:any;
 
  public lineChartLabels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio'];
  public lineChartOptions: ChartOptions = { responsive: true };
  public LineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Option1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Option2' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Option3' }
  ];

  public data = this.LineChartData

  public filterOptions = ['Option1', 'Option2', 'Option3'];
  public selectedOption = '';

  filterChart() {
    if (this.selectedOption != "") {
      this.data = this.LineChartData.filter(item => item.label === this.selectedOption);
    } else {
      
      this.data = this.LineChartData;
    }
  }
  addNewDataset() {
    const newDataset={
      data: new Array(this.lineChartLabels.length).fill(0).map(()=>Math.round(Math.random()*100)),
      label: `Dataset${this.LineChartData.length+1}`
    };
    this.data = [...this.data, newDataset];
  }
  deleteDataset() {
    const index=Math.floor(Math.random()*this.LineChartData.length);
    this.data.splice(index,1);
    this.data=[...this.data]
  }
   constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{
      console.log(data);
      this.apiData=data;
     })

     const response = fetch('https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2014-01-01&end_date=2014-12-31&collapse=monthly&transform=rdiff&api_key=8Zqxq282WxrUDZQr5mJ9', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET', // GET, POST, PUT, DELETE
      mode: 'cors' // the most important option
    });

    response.then(data => console.log(data));

    
  }

    

}

