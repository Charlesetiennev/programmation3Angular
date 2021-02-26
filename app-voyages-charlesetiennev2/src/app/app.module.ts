// App module
// Par Charles-Etienne Villemure
// Le 24 Fevrier 2021

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Francais
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import {ForfaitsService} from './forfaits.service'
import { AppComponent } from './app.component';
// Component
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { GrandForfaitComponent } from './grand-forfait/grand-forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { NombreEtoilesComponent } from './nombre-etoiles/nombre-etoiles.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { MenuComponent } from './menu/menu.component';
import { ForfaitsXComponent } from './forfaits-x/forfaits-x.component';
import { AProposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
// Pipe
import { ForfaitVedettePipe } from './forfait-vedette.pipe';
import { ForfaitsCubaPipe } from './forfaits-cuba.pipe';
// FormModule
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
// Charts
import { ChartsModule } from 'ng2-charts';
import { GraphiqueRegionComponent } from './graphique-region/graphique-region.component';
import { GraphiqueNombresVoyageursComponent } from './graphique-nombres-voyageurs/graphique-nombres-voyageurs.component';
import { ForfaitsYComponent } from './forfaits-y/forfaits-y.component';
import { ForfaitsTroisEtoilesPlusPipe } from './forfaits-trois-etoiles-plus.pipe';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { DialogAjoutForfaitComponent } from './dialog-ajout-forfait/dialog-ajout-forfait.component';
import { DialogModificationForfaitComponent } from './dialog-modification-forfait/dialog-modification-forfait.component';
import { FilterEtoilesPipe } from './filter-etoiles.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    PetitForfaitComponent,
    GrandForfaitComponent,
    FormulaireForfaitComponent,
    NombreEtoilesComponent,
    FormulaireRechercheComponent,
    ForfaitVedettePipe,
    MenuComponent,
    ForfaitsXComponent,
    AProposComponent,
    AdministrationComponent,
    GraphiqueRegionComponent,
    GraphiqueNombresVoyageursComponent,
    ForfaitsCubaPipe,
    ForfaitsYComponent,
    ForfaitsTroisEtoilesPlusPipe,
    StatistiquesComponent,
    DialogAjoutForfaitComponent,
    DialogModificationForfaitComponent,
    FilterEtoilesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
    MatButtonModule,
    MatSidenavModule,
    MatNativeDateModule,
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    ChartsModule
  ],
  providers: [ForfaitsService,
    {provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
