import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BuildingInsightsAPIResponse } from '../models/building-insights-api-response.model';
import { transformToBIVM } from '../utils/solar.utils';
import { Observable } from 'rxjs';
import { BuildingInsights } from '../models/building-insights.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class SolarPanelAPIService {

  constructor(private http: HttpClient) { }

  getBuildingInsights(latitude: number, longitude: number): Observable<BuildingInsights> {
    return this.http.get<BuildingInsightsAPIResponse>(this.getBuildingInsightsUrl(latitude, longitude))
      .pipe(map(
        // Transform the API Response to View Model
        (response: BuildingInsightsAPIResponse) => transformToBIVM(response))
      )
  }

  private getBuildingInsightsUrl(latitude: number, longitude: number) {
    return environment.solarApi.concat(`&key=${environment.solarApiKey}`).replace('${latitude}', latitude.toString()).replace('${longitude}', longitude.toString())
  }
}
