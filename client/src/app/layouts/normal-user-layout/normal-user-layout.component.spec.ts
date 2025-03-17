import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserLayoutComponent } from './normal-user-layout.component';

describe('NormalUserLayoutComponent', () => {
  let component: NormalUserLayoutComponent;
  let fixture: ComponentFixture<NormalUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalUserLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
