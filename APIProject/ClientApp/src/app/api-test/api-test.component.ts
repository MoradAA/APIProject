import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash"

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  public movie: IMovie;
  public key: string = "&apikey=fb93a790";

  constructor(private http: HttpClient) {
    http.get<IMovie>("https://www.omdbapi.com/?i=tt3896198" + this.key).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }
}
/*
  GetMovie = () =>
  {
    this.GetMovieInfo().subscribe(movieInfo => {
      this.movie = movieInfo;
    })
  }
  */

  export interface IRating {
    Source: string;
    Value: string;
  }

  export interface IMovie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }



