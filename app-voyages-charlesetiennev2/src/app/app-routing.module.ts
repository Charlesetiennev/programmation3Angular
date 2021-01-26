import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeForfaitsComponent} from './liste-forfaits/liste-forfaits.component'
import {AdministrationComponent} from './administration/administration.component'
import {AProposComponent} from './apropos/apropos.component'

const routes: Routes = [
  { path: 'accueil', component: ListeForfaitsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'a-propos' , component : AProposComponent},
  { path : '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
