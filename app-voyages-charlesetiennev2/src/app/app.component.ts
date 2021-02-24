// App component
// Par Charles-Etienne Villemure
// Le 5 Decembre 2020

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreEtoiles = 1;
  title = 'app-voyages-charlesetiennev';
}
