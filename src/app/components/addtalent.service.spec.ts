import { TestBed } from '@angular/core/testing';

import { AddtalentService } from './addtalent.service';

describe('AddtalentService', () => {
  let service: AddtalentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtalentService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
