import { createReducer, on } from '@ngrx/store';
import { initialState } from './notification.state';
import {
  changeStatus,
  loadNotificationsSuccess,
} from './notification.actions';
import { NotificationAdapter } from '../../shared/adapters/notification.adapter';
import {
  GroupedNotificationsResponse,
  NotificationAPIResult,
} from '../../shared/model/notification/notification.model';

export const notificationReducer = createReducer(
  initialState,
  on(loadNotificationsSuccess, (state, { response }) => ({
    ...state,
    notifications: response.results,
    groupedNotifications: NotificationAdapter.convertApiResponse(
      response.results
    ),
  })),

  on(changeStatus, (state, { guid, newCode, newName }) => {
    const updatedGroups = (
      state.groupedNotifications as GroupedNotificationsResponse[]
    ).map((group: GroupedNotificationsResponse) => {
      const updatedItems = group.items.map((item: NotificationAPIResult) => {
        if (item.guid === guid) {
          return { ...item, status: { code: newCode, name: newName } };
        }
        return item;
      });
      return { ...group, items: updatedItems };
    });
    return { ...state, groupedNotifications: updatedGroups };
  })
);
