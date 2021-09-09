import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, WildComponent } from "@workspace/ui-login";
import { PlanetComponent } from './sw-planets/planet/planet.component';
import { PlanetsComponent } from './sw-planets/sw-planets.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/:id', component: PlanetComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
