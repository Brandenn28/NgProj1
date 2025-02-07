import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkstationFormComponent } from './create-workstation-form.component';

describe('CreateWorkstationFormComponent', () => {
  let component: CreateWorkstationFormComponent;
  let fixture: ComponentFixture<CreateWorkstationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWorkstationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkstationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
