import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public key: string = "&apikey=fb93a790";

  constructor(private http: HttpClient) { }

  GetMovie(movie: string = "Guardians of the galaxy")
  {
    return this.http.get<IMovie>("https://www.omdbapi.com/?t=" + movie + "&apikey=fb93a790")
  }
}

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
