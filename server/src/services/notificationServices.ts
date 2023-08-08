import Notification from "../models/Notification"
import { NotificationInterface } from "../types/Notification"

export const getNotifications = async (userId: string) => {
    let notifications = await Notification.find({receiver: userId}).populate('sender')
    return notifications
}

export const createNotification = (notificationData: NotificationInterface) => {
    return Notification.create({
        ...notificationData
    })
}