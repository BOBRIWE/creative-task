import { Component, OnInit } from '@angular/core';
import { IFlatCard } from '../backend/IFlatCard';
import { FlatsBackendService } from '../backend/flats-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  flatCards: IFlatCard[] = [];

  constructor(private flatsBackend: FlatsBackendService) {}

  async ngOnInit(): Promise<void> {
    this.flatCards = await this.flatsBackend.fetchFlats();
  }
}
