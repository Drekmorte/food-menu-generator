import { TestBed } from '@angular/core/testing';

import { AnadirService } from './anadir.service';

describe('AnadirService', () => {
  let service: AnadirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnadirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
