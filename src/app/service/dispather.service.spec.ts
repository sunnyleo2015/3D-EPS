import { TestBed, inject } from '@angular/core/testing';

import { DispatherService } from './dispather.service';

describe('DispatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispatherService]
    });
  });

  it('should be created', inject([DispatherService], (service: DispatherService) => {
    expect(service).toBeTruthy();
  }));
});
