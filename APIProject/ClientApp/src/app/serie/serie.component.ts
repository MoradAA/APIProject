import { Component, Inject } from '@angular/core';
import { SerieService, ISeason } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html'
})
export class SerieComponent {
  public searchText: string;
  public searchSeason: string = "1";

  public numberOfSeasons: string;
  public serieImage;
  public seriePlot: string;
  public type: string = "Series";

  public season: ISeason;

  constructor(private serieSvc: SerieService) {
    this.searchSerieInfo();
  }

  private searchSerieInfo() {
    this.serieSvc.GetSerie(this.searchText).subscribe(result => {
      this.numberOfSeasons = result.totalSeasons;
      this.serieImage = result.Poster;
      this.seriePlot = result.Plot;
      this.type = result.Type;
    }, error => {
      console.error(error);
      this.numberOfSeasons = "Serie niet gevonden";
    });
  }

  private searchEpisodes() {
    this.serieSvc.GetEpisodes(this.searchText, this.searchSeason).subscribe(result => {
      this.season = result;
      //console.log(this.season.Title);
    }, error => {
      console.error(error);
      //this.season.Episodes[0].Title = "Dit seizoen bestaat niet!";
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
