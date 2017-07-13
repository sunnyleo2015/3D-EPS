import { TestBed, inject } from '@angular/core/testing';

import { AuthStatusService } from './auth-status.service';

describe('AuthStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthStatusService]
    });
  });

  it('should be created', inject([AuthStatusService], (service: AuthStatusService) => {
    expect(service).toBeTruthy();
  }));
});
