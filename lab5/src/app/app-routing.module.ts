import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { GoalsandaspirationsComponent } from './goalsandaspirations/goalsandaspirations.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'goalsandaspirations', component: GoalsandaspirationsComponent},
  {path: 'technologies', component: TechnologiesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
