import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  GetData(location: string = "antwerp")
  {
    return this.http.get('api.openweathermap.org/data/2.5/weather?q=${location}&APPID=50d352cbbf3bd2905ce5db3f0ffa8ad5')
  }
}
