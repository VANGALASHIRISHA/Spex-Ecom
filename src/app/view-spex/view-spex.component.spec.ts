import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpexComponent } from './view-spex.component';

describe('ViewSpexComponent', () => {
  let component: ViewSpexComponent;
  let fixture: ComponentFixture<ViewSpexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSpexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
