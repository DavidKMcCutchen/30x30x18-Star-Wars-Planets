import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPlanetsComponent } from './sw-planets.component';

describe('SwPlanetsComponent', () => {
  let component: SwPlanetsComponent;
  let fixture: ComponentFixture<SwPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
