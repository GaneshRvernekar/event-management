import { TestBed } from '@angular/core/testing';

import { EventSService } from './event-s.service';

describe('EventSService', () => {
  let service: EventSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
