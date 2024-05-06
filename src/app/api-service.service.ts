import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //private apiKey='8Zqxq282WxrUDZQr5mJ9';
  private apiUrl='https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2014-01-01&end_date=2014-12-31&collapse=monthly&transform=rdiff&api_key=8Zqxq282WxrUDZQr5mJ9';


 
  constructor(private http:HttpClient){ }

  getData():Observable<any>{
    const data = new Observable((observer: any) => {
      fetch(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        mode: 'no-cors' 
      })
    });

    data.subscribe((data: any) => console.log(data));
    return data;
  }

}