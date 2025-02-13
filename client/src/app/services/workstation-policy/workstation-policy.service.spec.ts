import { TestBed } from '@angular/core/testing';

import { WorkstationPolicyService } from './workstation-policy.service';

describe('WorkstationPolicyService', () => {
  let service: WorkstationPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkstationPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
