import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash"

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  person : IPerson;

  constructor(private http : HttpClient) { }

  GetPeople() {
    return this.http.get<IPeopleResult>("https://swapi.co/api/people/")
  }

  ngOnInit() {
    this.GetPerson();
  }

  GetPerson = () =>
  {
    //Hier krijg je een Observable terug waarop je je moet subscriben
    this.GetPeople().subscribe(people => {
      let index = _.random(0, people.results.length - 1)
      this.person = people.results[index];
    })
  }
}

  export interface IPerson {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string[];
      species: string[];
      vehicles: string[];
      starships: string[];
      created: Date;
      edited: Date;
      url: string;
  }

  export interface IPeopleResult {
      count: number;
      next: string;
      previous?: any;
      results: IPerson[];
  }

