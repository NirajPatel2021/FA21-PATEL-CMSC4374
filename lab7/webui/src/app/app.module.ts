import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ChuckNorrisJokesComponent } from './chuck-norris-jokes/chuck-norris-jokes.component';
import { RandomJokesComponent } from './random-jokes/random-jokes.component';
import { RonSwansonQuotesComponent } from './ron-swanson-quotes/ron-swanson-quotes.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ChuckNorrisJokesComponent,
    RandomJokesComponent,
    RonSwansonQuotesComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
