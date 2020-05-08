import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  // does not have any type;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
