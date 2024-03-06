import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  loadNotifications,
  loadNotificationsFailure,
  loadNotificationsSuccess,
} from './notification.actions';
import { NotificationService } from '../../shared/services/notification/notification.service';
import { NotificationAPIResponse } from '../../shared/model/notification/notification.model';

@Injectable()
export class NotificationEffects {
  constructor(
    private actions$: Actions,
    private notificationService: NotificationService
  ) {}

  loadNotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNotifications),
      switchMap(() =>
        this.notificationService.getNotificationData().pipe(
          map((response: NotificationAPIResponse) =>
            loadNotificationsSuccess({ response })
          ),
          catchError(() => of(loadNotificationsFailure()))
        )
      )
    )
  );
}
