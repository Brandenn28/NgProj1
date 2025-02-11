import { TestBed } from '@angular/core/testing';

import { WorkstationFeaturesService } from './workstation-features.service';

describe('WorkstationFeaturesService', () => {
  let service: WorkstationFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkstationFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
