import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SolarPotential } from 'src/app/models/building-insights.viewmodel';

@Component({
  selector: 'sp-insights-building-insights',
  templateUrl: './building-insights.component.html',
  styleUrls: ['./building-insights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingInsightsComponent {
  @Input() solarPotential: SolarPotential = {
    maxArrayAreaMeters2: 0,
    panelCapacityWatts: 0,
    maxSunshineHoursPerYear: 0,
    maxArrayPanelsCount: 0,
  };
}
