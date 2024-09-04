import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SOLAR_APP_CONSTANTS } from 'src/app/constants/solar.constants';
import { Coordinates } from 'src/app/models/coordinates.model';

@Component({
  selector: 'sp-insights-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent {

  // Points to Times Square, New York as default
  // TODO: Use end user's location as default
  @Input()
  coordindates: Coordinates = {
    latitude: SOLAR_APP_CONSTANTS.INITIAL_LATITUDE,
    longitude: SOLAR_APP_CONSTANTS.INITIAL_LONGITUDE
  };

  @Output() selectedLocation = new EventEmitter<Coordinates>();

  locationChosen = true;

  // TODO: Change any type to appropriate type from google.maps namespace
  onTargetSelected(event: any) {
    this.locationChosen = true;
    this.coordindates = {
      latitude: event.coords.lat,
      longitude: event.coords.lng
    };
    this.selectedLocation.emit(this.coordindates);
  }

  // TODO: Change any type to appropriate type from google.maps namespace
  onMapReady(map: any) {
    if (map) {
      // This is to hide the Dreman drag option
      map.setOptions({
        streetViewControl: false,
        fullscreenControl: false
      });
    }
  }
}
