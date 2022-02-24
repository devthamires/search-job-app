import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [NotificationComponent],
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NotificationModule,
      providers: [NotificationService],
    };
  }
}
