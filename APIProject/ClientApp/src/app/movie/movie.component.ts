import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public Title: string;
  public movieImage;

  searchText: string = "Guardians of the galaxy";

  constructor(private movieSvc: MovieService) {
    this.searchMovieInfo();
  }

  private searchMovieInfo() {
    this.movieSvc.GetMovie(this.searchText).subscribe(result => {
      //this.movie = result;
      this.Title = result.Title;
      this.movieImage = result.Poster;
    }, error => {
      console.error(error);
      this.Title = "Film niet gevonden";
    });
  }

  ngOnInit() {
    //this.movieSvc.GetMovie();
  }

  get SearchText() {
    return this.searchText;
  }

  set SearchText(value: string) {
    this.searchText = value;
    this.searchMovieInfo();
  }
}
