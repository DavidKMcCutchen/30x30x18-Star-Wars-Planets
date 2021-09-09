import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@workspace/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@workspace/core-data";
import { CoreStateModule } from "@workspace/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@workspace/environment';
import { UiLoginModule } from '@workspace/ui-login';
import { PlanetsComponent } from './sw-planets/sw-planets.component';
import { PlanetComponent } from './sw-planets/planet/planet.component';
import { PlanetListComponent } from './sw-planets/planets/planets-list/planets-list.component';
import { PlanetDetailsComponent } from './sw-planets/planets/planets-details/planets-details.component';
import { PlanetInfoComponent } from './sw-planets/planet/planet-info/planet-info.component';
PlanetInfoComponent

@NgModule({
  declarations: [AppComponent, PlanetsComponent, PlanetDetailsComponent, PlanetListComponent, PlanetInfoComponent, PlanetComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}