import { BuildingInsightsAPIResponse } from "../models/building-insights-api-response.model";
import { BuildingInsights } from "../models/building-insights.viewmodel";

export function transformToBIVM(apiResponse: BuildingInsightsAPIResponse): BuildingInsights {
    return new BuildingInsights(apiResponse);
}