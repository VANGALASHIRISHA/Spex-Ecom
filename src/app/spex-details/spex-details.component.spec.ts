import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpexDetailsComponent } from './spex-details.component';

describe('SpexDetailsComponent', () => {
  let component: SpexDetailsComponent;
  let fixture: ComponentFixture<SpexDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpexDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
