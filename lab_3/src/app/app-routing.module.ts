import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePageComponent } from './date-page/date-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OnePieceCharactersComponent } from './one-piece-characters/one-piece-characters.component';
import { BlankComponent } from './blank/blank.component';




const routes: Routes = [

  { path: "", component: BlankComponent },
  { path: "date", component: DatePageComponent },
  { path: "opc", component: OnePieceCharactersComponent },
  { path: "**", component: NotFoundPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
