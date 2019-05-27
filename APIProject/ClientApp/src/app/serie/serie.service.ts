import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rating } from 'primeng/rating';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  public key: string = "&apikey=fb93a790";

  constructor(private http: HttpClient) { }

  GetSerie(serie: string) {
    return this.http.get<ISerie>("https://www.omdbapi.com/?t=" + serie + "&apikey=fb93a790")
  }

  GetEpisodes(serie: string, season: number) {
    return this.http.get<ISeason>("https://www.omdbapi.com/?t=" + serie + "&apikey=fb93a790&Season=" + season)
  }

  PostRating(rating: IOwnRating) {
    this.http.post("https://localhost:44320/api/v1/ratings", rating).subscribe()
    //  , {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json'
    //  })
    //})
  }
}

export interface IOwnRating {
  id?: number;
  value: number;
}

export interface IRating {
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
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export interface ISeason {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: IEpisode[];
  Response: string;
}

export interface IEpisode {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
}
