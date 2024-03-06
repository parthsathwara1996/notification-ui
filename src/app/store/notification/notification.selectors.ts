import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './notification.state';
import { NotificationAdapter } from '../../shared/adapters/notification.adapter';

export const selectNotificationState =
  createFeatureSelector<NotificationState>('notification');

export const selectNotifications = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.notifications
);

export const selectGroupedNotifications = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.groupedNotifications
);

// export const selectGroupedNotifications = createSelector(
//   selectNotifications,
//   (notifications) => NotificationAdapter.convertApiResponse(notifications)
// );
