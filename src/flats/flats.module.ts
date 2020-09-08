import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatCardsListComponent } from './flat-cards-list/flat-cards-list.component';
import { FlatCardComponent } from './flat-card/flat-card.component';
import { AddressPipe } from './flat-card/address.pipe';
import { AreaPipe } from './flat-card/area.pipe';
import { AgentPipe } from './flat-card/agent.pipe';



@NgModule({
  declarations: [
    FlatCardsListComponent,
    FlatCardComponent,
    AddressPipe,
    AreaPipe,
    AgentPipe
  ],
  exports: [
    FlatCardsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlatsModule { }
