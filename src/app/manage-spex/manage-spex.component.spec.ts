import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpexComponent } from './manage-spex.component';

describe('ManageSpexComponent', () => {
  let component: ManageSpexComponent;
  let fixture: ComponentFixture<ManageSpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageSpexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
