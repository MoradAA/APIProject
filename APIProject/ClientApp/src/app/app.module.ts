import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './movie/movie.service';
import { SerieService } from './serie/serie.service';
import { MovieComponent } from './movie/movie.component';
import { SerieComponent } from './serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MovieComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movie', component: MovieComponent },
      { path: 'serie', component: SerieComponent },
    ]),
    CardModule,
    ButtonModule,
    DropdownModule,
    RatingModule,
    CarouselModule
  ],
  providers: [
    MovieService,
    SerieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
