import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpexComponent } from './add-spex.component';

describe('AddSpexComponent', () => {
  let component: AddSpexComponent;
  let fixture: ComponentFixture<AddSpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSpexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
