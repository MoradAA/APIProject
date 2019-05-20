import { Component, Inject } from '@angular/core';
import { SerieService, ISeason } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html'
})
export class SerieComponent {
  public searchText: string = "Game of thrones";
  public searchSeason: string = "1";

  public numberOfSeasons: string;
  public serieImage;
  public seriePlot: string;

  public season: ISeason;

  constructor(private serieSvc: SerieService) {
    //this.searchSerieInfo();
  }

  private searchSerieInfo() {
    this.serieSvc.GetSerie(this.searchText).subscribe(result => {
      this.numberOfSeasons = result.totalSeasons;
      this.serieImage = result.Poster;
      this.seriePlot = result.Plot;
    }, error => {
      console.error(error);
      this.numberOfSeasons = "Serie niet gevonden";
    });
  }

      private searchEpisodes() {
        this.serieSvc.GetEpisodes(this.searchSeason).subscribe(result => {
          this.season = result;
    }, error => {
      console.error(error);
      this.season.Episodes[0].Title = "Dit seizoen bestaat niet!";
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

  get SearchSeason() {
    return this.searchSeason;
  }

  set SearchSeason(value: string) {
    this.searchSeason = value;
  }
}
