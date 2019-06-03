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

  //Rating-actions
  PostRating(rating: IOwnRating) {
    this.http.post("https://localhost:44320/api/v1/ratings", rating).subscribe()
  }

  UpdateRating(rating: IOwnRating) {
    this.http.put("https://localhost:44320/api/v1/ratings", rating).subscribe()
  }

  //Favourite-actions
  PostFavourite(favourite: IFavourite) {
    this.http.post("https://localhost:44320/api/v1/favourites", favourite).subscribe()
  }

  DeleteFavourite(id: number) {
    this.http.delete("https://localhost:44320/api/v1/favourites/d/" + id).subscribe()
  }
}

export interface IOwnRating {
  id?: number;
  value: number;
  title: string;
}

export interface IFavourite {
  id?: number;
  title: string;
  year: string;
  runtime: string;
  genre: string;
  imdbrating: string;
  ownrating: IOwnRating;
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
