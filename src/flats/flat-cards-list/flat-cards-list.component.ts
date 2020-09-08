import { Component, Input, OnInit } from '@angular/core';
import { IFlatCard } from '../flat-card/IFlatCard';

@Component({
  selector: 'app-flat-cards-list',
  templateUrl: './flat-cards-list.component.html',
  styleUrls: ['./flat-cards-list.component.scss']
})
export class FlatCardsListComponent implements OnInit {
  @Input() flatCards: IFlatCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
