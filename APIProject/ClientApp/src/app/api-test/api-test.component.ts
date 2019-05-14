import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  //public movie;
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
        }, error => console.error(error));
        ;
    }

  ngOnInit() {
    //this.movieSvc.GetMovie();
  }

  get SearchText()
  {
    return this.searchText;
  }

  set SearchText(value: string)
  {
    this.searchText = value;
    this.searchMovieInfo();
  }
}



