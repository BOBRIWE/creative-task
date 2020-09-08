import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FlatCardService {
  get isFavourite(): boolean {
    return this.isFavouritePrivate;
  }

  set isFavourite(value: boolean) {
    this.isFavouritePrivate = value;
    this.isFavouriteChanged.next(value);
  }

  isFavouriteChanged = new Subject<boolean>();

  constructor() { }

  private isFavouritePrivate = false;

}
