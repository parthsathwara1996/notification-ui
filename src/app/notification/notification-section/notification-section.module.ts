import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSectionRoutingModule } from './notification-section-routing.module';
import { NotificationSectionComponent } from './notification-section.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';

@NgModule({
  declarations: [NotificationSectionComponent, NotificationCardComponent],
  imports: [CommonModule, NotificationSectionRoutingModule],
  exports: [NotificationSectionComponent],
})
export class NotificationSectionModule {}
