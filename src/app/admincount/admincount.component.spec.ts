import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincountComponent } from './admincount.component';

describe('AdmincountComponent', () => {
  let component: AdmincountComponent;
  let fixture: ComponentFixture<AdmincountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmincountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
