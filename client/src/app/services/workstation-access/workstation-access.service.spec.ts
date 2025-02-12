import { TestBed } from '@angular/core/testing';

import { WorkstationAccessService } from './workstation-access.service';

describe('WorkstationAccessService', () => {
  let service: WorkstationAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkstationAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
