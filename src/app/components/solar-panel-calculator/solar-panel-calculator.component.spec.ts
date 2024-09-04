import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPanelCalculatorComponent } from './solar-panel-calculator.component';

describe('SolarPanelCalculatorComponent', () => {
  let component: SolarPanelCalculatorComponent;
  let fixture: ComponentFixture<SolarPanelCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPanelCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarPanelCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
