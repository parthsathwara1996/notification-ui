import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NotificationAPIResponse } from '../../model/notification/notification.model';
import { AppEndPointsService } from '../appEndPoints/app-end-points.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationURL: string = '';

  constructor(
    private httpClient: HttpClient,
    private appEndPointsService: AppEndPointsService
  ) {
    this.notificationURL = appEndPointsService.notificationEndPoint;
  }

  getNotificationData(): Observable<NotificationAPIResponse> {
    return this.httpClient
      .get<NotificationAPIResponse>(this.notificationURL)
      .pipe(map((response: NotificationAPIResponse) => response));
  }
}
