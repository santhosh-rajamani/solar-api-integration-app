import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { BaseComponent } from './components/base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingInsightsComponent } from './components/building-insights/building-insights.component';
import { SolarPanelCalculatorComponent } from './components/solar-panel-calculator/solar-panel-calculator.component';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [
  MatSliderModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule
]

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    BaseComponent,
    BuildingInsightsComponent,
    SolarPanelCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ...MATERIAL_MODULES,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
