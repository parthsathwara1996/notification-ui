import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationSectionComponent } from './notification-section.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class NotificationSectionRoutingModule {}

export const routedComponents = [NotificationSectionComponent];
