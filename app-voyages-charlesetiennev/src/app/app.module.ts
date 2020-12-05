// App module
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { GrandForfaitComponent } from './grand-forfait/grand-forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { NombreEtoilesComponent } from './nombre-etoiles/nombre-etoiles.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
// FormModule
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { ForfaitVedettePipe } from './forfait-vedette.pipe';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    PetitForfaitComponent,
    GrandForfaitComponent,
    FormulaireForfaitComponent,
    NombreEtoilesComponent,
    FormulaireRechercheComponent,
    ForfaitVedettePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule, 
    ReactiveFormsModule ,
    MatSidenavModule,
    MatNativeDateModule,
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
