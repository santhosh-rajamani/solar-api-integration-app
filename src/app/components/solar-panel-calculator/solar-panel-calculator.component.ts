import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SolarPotential } from 'src/app/models/building-insights.viewmodel';

@Component({
  selector: 'sp-insights-solar-panel-calculator',
  templateUrl: './solar-panel-calculator.component.html',
  styleUrls: ['./solar-panel-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolarPanelCalculatorComponent {
  @Input() solarPotential: SolarPotential = {
    maxArrayAreaMeters2: 0,
    panelCapacityWatts: 0,
    maxSunshineHoursPerYear: 0,
    maxArrayPanelsCount: 0,
  };

  selectedPanelCount: number = 1;

  get totalPowerOutput(): number {
    return this.selectedPanelCount * this.solarPotential.panelCapacityWatts;
  }

  get annualEnergyGeneration(): number {
    return +(this.totalPowerOutput * this.solarPotential.maxSunshineHoursPerYear / 1000).toFixed(2); // Converting to kWh
  }
}
