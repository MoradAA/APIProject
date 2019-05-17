import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  public key: string = "&apikey=fb93a790";

  constructor(private http: HttpClient) { }

  GetSerie(serie: string = "Game of thrones") {
    return this.http.get<ISerie>("https://www.omdbapi.com/?t=" + serie + "&apikey=fb93a790")
  }
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface ISerie {
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
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}
