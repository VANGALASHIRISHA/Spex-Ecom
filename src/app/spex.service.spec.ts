import { TestBed } from '@angular/core/testing';

import { SpexService } from './spex.service';

describe('SpexService', () => {
  let service: SpexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
