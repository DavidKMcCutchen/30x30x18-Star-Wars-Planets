import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLANET_ENVIRONMENT } from './planets.token';
import { PlanetEnvironment } from "./planets.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PlanetEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PLANET_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
