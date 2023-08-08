import { Types, ObjectId } from "mongoose"

export interface NotificationInterface {
        notificationType: string,
        sender: Types.ObjectId,
        receiver: Types.ObjectId,
        text: string,
        expire_at: Date
}