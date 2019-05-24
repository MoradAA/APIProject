import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie, ISearch } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: IMovie;
  public search: ISearch[] = [];

  searchText: string = "Guardians of the galaxy";
  searchMovie: string = "Batman";

  constructor(private movieSvc: MovieService) {
    this.searchMovieInfo();
    //this.searchMovies();
  }

  private searchMovieInfo() {
    this.movieSvc.GetMovie(this.searchText).subscribe(result => {
      this.movie = result;
    }, error => {
      console.error(error);
      this.movie.Title = "Film niet gevonden";
    });
  }

  private searchMovies() {
    this.movieSvc.SearchMovies(this.searchMovie).subscribe(result => {
      this.search = result;
      console.log(this.search);
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
