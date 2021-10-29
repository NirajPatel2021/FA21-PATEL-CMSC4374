import { TestBed } from '@angular/core/testing';

import { StrawHatService } from './straw-hat.service';

describe('StrawHatService', () => {
  let service: StrawHatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrawHatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
