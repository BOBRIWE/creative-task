import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IFlatCard } from '../../backend/IFlatCard';
import { FlatCardService } from './flat-card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flat-card',
  templateUrl: './flat-card.component.html',
  styleUrls: ['./flat-card.component.scss'],
  providers: [ FlatCardService ]
})
export class FlatCardComponent implements OnInit, OnDestroy {
  @Input() flatCard: IFlatCard;

  private subscription: Subscription;

  constructor(public flatCardService: FlatCardService) { }

  favouriteClicked(): void {
    this.flatCardService.isFavourite = !this.flatCardService.isFavourite;
  }

  ngOnInit(): void {
    this.subscription = this.flatCardService.isFavouriteChanged.subscribe((value) => {
      // For backend
      console.log(`Квартира: ${this.flatCard.attributes.title} - ${value ? 'нравится' : 'не нравится'}`);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
