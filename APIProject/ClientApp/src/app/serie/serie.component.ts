import { Component, Inject } from '@angular/core';
import { SerieService, ISeason, IOwnRating, IFavourite } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html'
})
export class SerieComponent {
  public searchText: string = "Game of thrones";
  public searchSeason: number = 1;

  public numberOfSeasons: string;
  public serieImage;
  public seriePlot: string;
  //public type: string;

  public title: string;
  public year: string;
  public runtime: string;
  public genre: string;
  public imdbrating: string;

  public value: number = 0;

  public p: IOwnRating;

  public disabled: boolean = true;

  public season: ISeason;
  public allSeasons: any[] = [{ label: "Season 1 ", value: 1 }];

  constructor(private serieSvc: SerieService) {
    //this.searchSerieInfo();
  }

  public searchSerieInfo() {
    this.serieSvc.GetSerie(this.searchText).subscribe(result => {
      this.allSeasons = [];
      this.numberOfSeasons = result.totalSeasons;
      this.serieImage = result.Poster;
      this.seriePlot = result.Plot;

      this.title = result.Title;
      this.year = result.Year;
      this.runtime = result.Runtime;
      this.genre = result.Genre;
      this.imdbrating = result.imdbRating;

      this.disabled = false;

      for (let i = 1; i <= +this.numberOfSeasons; i++) {
        this.allSeasons.push({ label: `Season ${i} `, value: i });
      }
      console.log(this.allSeasons);
    }, error => {
      console.error(error);
      //this.numberOfSeasons = "Serie niet gevonden";
    });
  }

  public searchEpisodes() {
    this.serieSvc.GetEpisodes(this.searchText, this.searchSeason).subscribe(result => {
      this.season = result;
      //console.log(this.season.Title);
    }, error => {
      console.error(error);
      //this.season.Episodes[0].Title = "Dit seizoen bestaat niet!";
    });
  }

  public postRating() {
    this.p = {
      "value": this.value,
      "title": this.title
    }
    console.log(this.p);
    this.serieSvc.PostRating(this.p);
  }

  public updateRating() {
    this.p = {
      "value": this.value,
      "title": this.title
    }
    console.log(this.p);
    this.serieSvc.UpdateRating(this.p);
  }

  public postFavourite() {
    let f: IFavourite = {
      "title": this.title,
      "year": this.year,
      "runtime": this.runtime,
      "genre": this.genre,
      "imdbrating": this.imdbrating,
      "ownrating": this.p
    }
    console.log(f);
    this.serieSvc.PostFavourite(f);
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
