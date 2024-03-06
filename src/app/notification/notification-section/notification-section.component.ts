import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectGroupedNotifications,
} from '../../store/notification/notification.selectors';
import { loadNotifications } from '../../store/notification/notification.actions';
import { GroupedNotificationsResponse } from '../../shared/model/notification/notification.model';

@Component({
  selector: 'app-notification-section',
  templateUrl: './notification-section.component.html',
  styleUrl: './notification-section.component.scss',
})
export class NotificationSectionComponent implements OnInit {
  notifications$!: Observable<GroupedNotificationsResponse[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadNotifications());
    this.notifications$ = this.store.pipe(select(selectGroupedNotifications));
  }
}
