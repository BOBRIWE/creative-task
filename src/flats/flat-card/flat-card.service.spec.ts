import { TestBed } from '@angular/core/testing';

import { FlatCardService } from './flat-card.service';

describe('FlatCardService', () => {
  let service: FlatCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
