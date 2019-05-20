import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: IMovie;
  //public Title: string;
  //public movieImage;

  searchText: string = "Guardians of the galaxy";

  constructor(private movieSvc: MovieService) {
    this.searchMovieInfo();
  }

  private searchMovieInfo() {
    this.movieSvc.GetMovie(this.searchText).subscribe(result => {
      this.movie = result;
      //this.Title = result.Title;
      //this.movieImage = result.Poster;
    }, error => {
      console.error(error);
      this.movie.Title = "Film niet gevonden";
    });
  }

  ngOnInit() {
  }

  get SearchText() {
    return this.searchText;
  }

  set SearchText(value: string) {
    this.searchText = value;
  }
}
