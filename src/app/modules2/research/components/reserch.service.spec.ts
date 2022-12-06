import { TestBed } from '@angular/core/testing';

import { ReserchService } from './reserch.service';

describe('ReserchService', () => {
  let service: ReserchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
