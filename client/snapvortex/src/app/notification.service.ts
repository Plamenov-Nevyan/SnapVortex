import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { NotificationData } from './types/NotificationData';
import { notificationInitValues } from './types/typesInitValues';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 public notification$: BehaviorSubject<any[]> = new BehaviorSubject<any>([])
 public newNotification$: BehaviorSubject<NotificationData> = new BehaviorSubject<NotificationData>(notificationInitValues)
  constructor() { }
socket = io('http://localhost:8000')

public askForNotifications(userId: string){
  this.socket.emit('askForNotifications', userId)
}

public getNotifications(){
  this.socket.on('receiveNotifications', (notifications: NotificationData[]) => {
    this.notification$.next(notifications)
  })
  return this.notification$.asObservable()
}

public receiveNewNotifications(){
  this.socket.on('newNotification', (notification: NotificationData) => {
    this.newNotification$.next(notification)
  })
  return this.newNotification$.asObservable()
}
}
