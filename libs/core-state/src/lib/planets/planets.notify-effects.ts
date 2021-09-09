import { Injectable } from '@angular/core';
import { NotificationsService } from '@workspace/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as PlanetsActions from './planets.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlanetsActions.createPlanetSuccess),
        tap(() => this.notificationService.notify('Create Planet Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlanetsActions.updatePlanetSuccess),
        tap(() => this.notificationService.notify('Update Planet Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PlanetsActions.deletePlanetSuccess),
        tap(() => this.notificationService.notify('Delete Planet Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
