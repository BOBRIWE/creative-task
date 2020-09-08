import { Component, Input, OnInit } from '@angular/core';
import { IFlatCard } from './IFlatCard';

@Component({
  selector: 'app-flat-card',
  templateUrl: './flat-card.component.html',
  styleUrls: ['./flat-card.component.scss']
})
export class FlatCardComponent implements OnInit {
  @Input() flatCard: IFlatCard;

  constructor() { }

  ngOnInit(): void {
  }

}
