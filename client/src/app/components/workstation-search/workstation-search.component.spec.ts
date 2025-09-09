import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationSearchComponent } from './workstation-search.component';

describe('WorkstationSearchComponent', () => {
  let component: WorkstationSearchComponent;
  let fixture: ComponentFixture<WorkstationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
