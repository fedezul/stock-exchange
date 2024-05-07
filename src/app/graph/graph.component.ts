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
 
  public lineChartLabels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  public lineChartOptions: ChartOptions = { 
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'YYYY-MM-DD'
          }
        }
      },
      y: {
        beginAtZero: true
      }
    }
   };
  public LineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,78,28,19,90,53], label: 'Option1'},
    { data: [28, 48, 40, 19, 86, 27, 90,60,58,78,9,44,13], label: 'Option2' },
    { data: [18, 48, 77, 9, 100, 27, 40,38,8,69,70,23], label: 'Option3' }
  ];

  public data = this.LineChartData

 newData(newData:ChartDataset[]){
  this.data = newData
 }
 newDate(newDate:ChartDataset[]){
  this.data=newDate
 }
  addNewDataset() {
    const newDataset={
      data: new Array(this.lineChartLabels.length).fill(0).map(()=>Math.round(Math.random()*100)),
      label: `Dataset ${this.data.length+1}`
    };
    this.data = [...this.data, newDataset];
  }
  deleteDataset() {
    const index=Math.floor(Math.random()*this.LineChartData.length);
    this.data.splice(index,1);
    this.data=[...this.data]
  }

  resetDataset(){
    this.data = this.LineChartData;
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


