import { BuildingInsightsAPIResponse } from "./building-insights-api-response.model";
import { Coordinates } from "./coordinates.model";

export interface SolarPotential {
    maxArrayAreaMeters2: number;
    panelCapacityWatts: number;
    maxSunshineHoursPerYear: number;
    maxArrayPanelsCount: number,
}

export class BuildingInsights {
    address: string;
    solarPotential: SolarPotential;
    location: Coordinates;

    getAddress(country: string, state: string, zipcode: string):string {
        let address = country;
        if (state) {
            address = address + ', ' + state
        }
        if (zipcode) {
            address = address + ' - ' + zipcode
        }
        return address;
    }

    constructor(private buildingInsightsAPIResponse: BuildingInsightsAPIResponse) {
        this.location = buildingInsightsAPIResponse.center;
        this.address = this.getAddress(buildingInsightsAPIResponse.regionCode, buildingInsightsAPIResponse.administrativeArea, buildingInsightsAPIResponse.postalCode);
        const { maxArrayAreaMeters2, panelCapacityWatts, maxSunshineHoursPerYear, maxArrayPanelsCount } = buildingInsightsAPIResponse.solarPotential;
        this.solarPotential = { maxArrayAreaMeters2, panelCapacityWatts, maxSunshineHoursPerYear, maxArrayPanelsCount }
    }
}