import { Component } from '@angular/core';
import { IFlatCard } from '../flats/flat-card/IFlatCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flatCards: IFlatCard[] = [];
}
