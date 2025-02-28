import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationImageUploaderComponent } from './workstation-image-uploader.component';

describe('WorkstationImageUploaderComponent', () => {
  let component: WorkstationImageUploaderComponent;
  let fixture: ComponentFixture<WorkstationImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstationImageUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstationImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
