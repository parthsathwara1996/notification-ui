import { TestBed } from '@angular/core/testing';

import { AppEndPointsService } from './app-end-points.service';

describe('AppEndPointsService', () => {
  let service: AppEndPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEndPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
