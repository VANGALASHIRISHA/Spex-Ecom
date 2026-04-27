import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductsdetailsComponent } from './adminproductsdetails.component';

describe('AdminproductsdetailsComponent', () => {
  let component: AdminproductsdetailsComponent;
  let fixture: ComponentFixture<AdminproductsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminproductsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminproductsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
