import {
  GroupedNotificationsResponse,
  NotificationAPIResult,
} from '../../shared/model/notification/notification.model';

export interface NotificationState {
  notifications: NotificationAPIResult[];
  groupedNotifications: GroupedNotificationsResponse[];
}

export const initialState: NotificationState = {
  notifications: [],
  groupedNotifications: [],
};
