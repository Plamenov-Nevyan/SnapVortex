import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { NotificationData } from 'src/app/types/NotificationData';
import { notificationInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
@Input() showNotifications: boolean = false
userId: string | null = ''
notificationsList: NotificationData[] = []
newNotification: NotificationData = notificationInitValues

  constructor(
    private notificationServices: NotificationService,
    private sessionServices: SessionStorageService
    ){}

  ngOnInit(): void {
    this.userId = this.sessionServices.getUserId()
    this.notificationServices.getNotifications().subscribe((notifications: NotificationData[]) => {
      if(notifications.length > 0){
        this.notificationsList = [...notifications]
      }
    })
    this.notificationServices.receiveNewNotifications().subscribe((notification: NotificationData) => {
      this.newNotification = {...notification}
      this.notificationsList.unshift(this.newNotification)
    })
    if(this.userId){this.notificationServices.askForNotifications(this.userId)}
  }

}
