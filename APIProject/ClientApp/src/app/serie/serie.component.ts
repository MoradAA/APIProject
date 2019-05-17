import { Component, Inject } from '@angular/core';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html'
})
export class SerieComponent {
  public searchText: string = "Game of thrones";
  public searchSeason: string = "";

  public numberOfEpisodes: string;

  constructor(private serieSvc: SerieService) {
    this.searchSerieInfo();
  }

    private searchSerieInfo() {
        this.serieSvc.GetSerie(this.searchText).subscribe(result => {
            this.numberOfEpisodes = result.totalSeasons;
        }, error => {
            console.error(error);
        });
    }
}


