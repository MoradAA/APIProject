import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import * as math from "mathjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string;
  temp: number;

  constructor(private weatherSvc: WeatherService)
  {
    this.weatherSvc.GetData().subscribe(result => {
      this.city = result.name;
      this.temp = result.main.temp;
    }, error => console.error(error));;
  }

  ngOnInit() {
  }

}
