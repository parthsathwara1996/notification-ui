import {
  GroupedNotificationsResponse,
  NotificationAPIResult,
} from '../model/notification/notification.model';

export class NotificationAdapter {
  static sortAndGroupByDate(
    data: NotificationAPIResult[]
  ): GroupedNotificationsResponse[] {
    // Sort the notifications in descending order of creation time
    data.sort(
      (a: NotificationAPIResult, b: NotificationAPIResult) =>
        new Date(b.createdTimestamp).getTime() -
        new Date(a.createdTimestamp).getTime()
    );
    // Group the notifications by date
    return this.groupByDate(data);
  }

  static groupByDate(
    NotificationAPIResultData: NotificationAPIResult[]
  ): GroupedNotificationsResponse[] {
    //  groupByDate logic goes here
    const groupedData: GroupedNotificationsResponse[] = [];
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    NotificationAPIResultData.forEach(
      (notificationAPIData: NotificationAPIResult) => {
        const notificationCreatedTimestamp = new Date(
          notificationAPIData.createdTimestamp
        );
        if (
          notificationCreatedTimestamp.toDateString() === today.toDateString()
        ) {
          const todayGroup = groupedData.find(
            (group: GroupedNotificationsResponse) => group.label === 'Today'
          );
          if (todayGroup) {
            todayGroup.items.push(notificationAPIData);
          } else {
            groupedData.push({ label: 'Today', items: [notificationAPIData] });
          }
        } else if (
          notificationCreatedTimestamp.toDateString() ===
          yesterday.toDateString()
        ) {
          const yesterdayGroup = groupedData.find(
            (group: GroupedNotificationsResponse) => group.label === 'Yesterday'
          );
          if (yesterdayGroup) {
            yesterdayGroup.items.push(notificationAPIData);
          } else {
            groupedData.push({
              label: 'Yesterday',
              items: [notificationAPIData],
            });
          }
        } else {
          const formattedDate = `${notificationCreatedTimestamp.getDate()} ${notificationCreatedTimestamp.toLocaleString(
            'default',
            { month: 'short' }
          )} ${notificationCreatedTimestamp.getFullYear()}`;
          const dateGroup = groupedData.find(
            (group: GroupedNotificationsResponse) =>
              group.label === formattedDate
          );
          if (dateGroup) {
            dateGroup.items.push(notificationAPIData);
          } else {
            groupedData.push({
              label: formattedDate,
              items: [notificationAPIData],
            });
          }
        }
      }
    );
    return groupedData;
  }

  static convertApiResponse(
    response: NotificationAPIResult[]
  ): GroupedNotificationsResponse[] {
    const notifications = [...response];
    // Sort and group the notifications by date
    return this.sortAndGroupByDate(notifications);
  }
}
