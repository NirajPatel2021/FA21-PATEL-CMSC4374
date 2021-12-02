import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChuckNorrisJokesComponent} from "./chuck-norris-jokes/chuck-norris-jokes.component";
import {RandomJokesComponent} from "./random-jokes/random-jokes.component";
import {RonSwansonQuotesComponent} from "./ron-swanson-quotes/ron-swanson-quotes.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path: 'chucknorris', component: ChuckNorrisJokesComponent},
  {path: 'random', component: RandomJokesComponent},
  {path: 'ronswanson', component: RonSwansonQuotesComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
