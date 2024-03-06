import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NotificationAPIResult } from '../../../shared/model/notification/notification.model';
import { Store } from '@ngrx/store';
import {
  changeStatus,
} from '../../../store/notification/notification.actions';
import { Router } from '@angular/router';
import {
  LinkTypeCodes,
  StatusCode,
  StatusName,
} from '../../../shared/enums/notification/notification.enum';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCardComponent {
  statusCodeEnum = StatusCode;
  linkTypeCodesEnum = LinkTypeCodes;

  @Input() notification!: NotificationAPIResult;

  constructor(private store: Store, private router: Router) {}

  onClickMarkasRead_UnRead(notification: NotificationAPIResult) {
    if (notification.status.code === StatusCode.UR) {
      this.store.dispatch(
        changeStatus({
          guid: notification.guid,
          newCode: StatusCode.R,
          newName: StatusName.Read,
        })
      );
    } else {
      this.store.dispatch(
        changeStatus({
          guid: notification.guid,
          newCode: StatusCode.UR,
          newName: StatusName.Unread,
        })
      );
    }
  }

  routeToLink(linkTypeCode: string) {
    switch (linkTypeCode) {
      case LinkTypeCodes.LCOfferEntity:
        this.router.navigate(['/offer']);
        break;
      case LinkTypeCodes.LCEntity:
        this.router.navigate(['/letter-of-credit']);
        break;
      default:
        break;
    }
  }
}
