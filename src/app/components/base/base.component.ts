import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, share, shareReplay, tap, throwError } from 'rxjs';
import { AppState } from 'src/app/constants/appstates.enum';
import { SOLAR_APP_CONSTANTS } from 'src/app/constants/solar.constants';
import { BuildingInsights } from 'src/app/models/building-insights.viewmodel';
import { Coordinates } from 'src/app/models/coordinates.model';
import { SolarPanelAPIService } from 'src/app/services/solar-panel-api.service';

@Component({
  selector: 'sp-insights-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
    appStates = AppState;
    appState = AppState.INITIAL;
    
    //This property will never be null when accessed in template. appState enum logic will take care of it.
    buildingInsights!: BuildingInsights;

    // Points to Times Square, New York as default
    // TODO: Use end user's location as default
    coords: Coordinates = {
      latitude: SOLAR_APP_CONSTANTS.INITIAL_LATITUDE,
      longitude: SOLAR_APP_CONSTANTS.INITIAL_LONGITUDE
    };

    constructor(private solarPanelAPIService: SolarPanelAPIService, private route: ActivatedRoute) {}

    ngOnInit(): void {
      // Subscribe to query parameters
      this.route.queryParams.subscribe(params => {
        const latitude = +params['lat']; 
        const longitude = +params['lng'];

        if (latitude && longitude) {
          this.onCoordsChanged({latitude, longitude})
        } 
      });
    }

    onCoordsChanged(event: Coordinates) {
      this.coords = event;
      this.fetchBuildingDetails(this.coords);
    }

    private fetchBuildingDetails(coordinates: Coordinates) {
      this.appState = AppState.LOCATION_SELECTED;
      this.solarPanelAPIService.getBuildingInsights(coordinates.latitude, coordinates.longitude).subscribe({
        next: (value: BuildingInsights) => {
          this.buildingInsights = value;
          this.coords = value.location;
          this.appState = AppState.LOCATION_SELECTED_VALID;
        }, 
        error: (error) => {
          // TODO:: Handle error in a better way for different scenarios
          this.appState = AppState.LOCATION_SELECTED_INVALID;
          return throwError(() => new Error(error));
        }
      })
    }

}
