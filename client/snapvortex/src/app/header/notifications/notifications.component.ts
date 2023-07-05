import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
@Input() showNotifications: boolean = false

  constructor(){console.log(this.showNotifications)}
}
