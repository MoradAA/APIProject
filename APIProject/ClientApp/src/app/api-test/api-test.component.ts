import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  public movie;
  Title: string;

  constructor(private movieSvc: MovieService) {
    this.movieSvc.GetMovie().subscribe(result => {
      this.movie = result;
    }, error => console.error(error));;
  }

  ngOnInit() {
    this.movieSvc.GetMovie();
  }
}



