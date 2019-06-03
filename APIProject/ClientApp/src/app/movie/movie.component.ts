import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie, ISearchResult } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: IMovie;
  public search: ISearchResult[] = [];

  searchText: string = "Guardians of the galaxy";
  searchMovie: string = "Batman";

  constructor(private movieSvc: MovieService) {
    this.searchMovieInfo(this.searchText);
    //this.searchMovies();
  }

  public searchMovieInfo(searchText: string) {
    this.movieSvc.GetMovie(searchText).subscribe(result => {
      this.movie = result;
      console.log(searchText);
    }, error => {
      console.error(error);
      this.movie.Title = "Film niet gevonden";
      });

    ////scrolt het schrem terug naar boven
    //let scrollToTop = window.setInterval(() => {
    //  let pos = window.pageYOffset;
    //  if (pos > 0) {
    //    window.scrollTo(0, pos - 150);
    //  } else {
    //    window.clearInterval(scrollToTop);
    //  }
    //}, 16);
  }

  public searchMovies() {
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
