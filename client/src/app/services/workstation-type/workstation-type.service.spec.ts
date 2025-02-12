import { TestBed } from '@angular/core/testing';

import { WorkstationTypeService } from './workstation-type.service';

describe('WorkstationTypeService', () => {
  let service: WorkstationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkstationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
