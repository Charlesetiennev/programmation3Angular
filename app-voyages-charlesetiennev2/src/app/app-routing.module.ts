import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeForfaitsComponent} from './liste-forfaits/liste-forfaits.component';
import {AdministrationComponent} from './administration/administration.component';
import {AProposComponent} from './apropos/apropos.component';
import {ForfaitsXComponent} from './forfaits-x/forfaits-x.component';
import {ForfaitsYComponent} from './forfaits-y/forfaits-y.component';
import {StatistiquesComponent} from './statistiques/statistiques.component';
const routes: Routes = [
  { path: 'accueil', component: ListeForfaitsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'a-propos' , component : AProposComponent},
  { path: 'forfaitsCuba' , component : ForfaitsXComponent},
  { path: 'troisEtoilesPlus' , component : ForfaitsYComponent},
  { path: 'statistiques' , component : StatistiquesComponent},
  { path : '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
