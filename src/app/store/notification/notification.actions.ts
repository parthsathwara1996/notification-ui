import { createAction, props } from '@ngrx/store';
import { NotificationAPIResponse } from '../../shared/model/notification/notification.model';

export const loadNotifications = createAction('[Notification] Load Notifications');
export const loadNotificationsSuccess = createAction('[Notification] Load Notifications Success', props<{ response: NotificationAPIResponse }>());
export const loadNotificationsFailure = createAction('[Notification] Load Notifications Failed');

export const changeStatus = createAction('changeStatus', props<{ guid: string, newCode: string, newName: string }>());