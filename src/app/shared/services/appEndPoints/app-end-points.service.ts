import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppEndPointsService {
  baseUrl = 'https://ttq-uks-codetest-dev-fun.azurewebsites.net/api/';

  constructor() {}

  public get notificationEndPoint(): string {
    return this.baseUrl + '/notifications';
  }
}
