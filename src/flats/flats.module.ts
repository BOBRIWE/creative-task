import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatCardsListComponent } from './flat-cards-list/flat-cards-list.component';
import { FlatCardComponent } from './flat-card/flat-card.component';



@NgModule({
  declarations: [FlatCardsListComponent, FlatCardComponent],
  exports: [
    FlatCardsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlatsModule { }
