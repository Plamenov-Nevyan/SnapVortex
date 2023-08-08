import { User } from "./User";

export interface NotificationData {
    notificationType: string,
    sender: User,
    receiver: string,
}