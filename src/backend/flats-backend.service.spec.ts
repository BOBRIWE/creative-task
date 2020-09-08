import { TestBed } from '@angular/core/testing';

import { FlatsBackendService } from './flats-backend.service';

describe('FlatsBackendService', () => {
  let service: FlatsBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatsBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
