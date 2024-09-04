import { Coordinates } from "./coordinates.model";


export interface BuildingInsightsAPIResponse {
    name: string;
    center: Coordinates;
    imageryDate: {
        year: number;
        month: number;
        day: number;
    };
    postalCode: string;
    administrativeArea: string;
    regionCode: string;
    imageryProcessedDate: {
        year: number;
        month: number;
        day: number;
    };
    imageryQuality: string;
    solarPotential: {
        buildingStats: {
            areaMeters2: number;
            sunshineQuantiles: any[];
            groundAreaMeters2: number;
        };
        carbonOffsetFactorKgPerMWh: number;
        financialAnalyses: any[]; 
        maxArrayAreaMeters2: number;
        maxArrayPanelsCount: number;
        maxSunshineHoursPerYear: number;
        panelCapacityWatts: number;
        panelHeightMeters: number;
        panelLifetimeYears: number;
        panelWidthMeters: number;
        roofSegmentStats: any[]; 
        solarPanelConfigs: any[];
        solarPanels: any[]; 
        wholeRoofStats: {
            areaMeters2: number;
            sunshineQuantiles: any[];
            groundAreaMeters2: number;
        };
    };
    statisticalArea: string;
}
