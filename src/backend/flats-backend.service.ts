import { Injectable } from '@angular/core';
import { IFlatCard } from './IFlatCard';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlatsBackendService {

  constructor(private http: HttpClient) { }

  async fetchFlats(): Promise<IFlatCard[]> {
    return (await this.http.get('assets/entities.json').toPromise<any>()).response;
  }
}
