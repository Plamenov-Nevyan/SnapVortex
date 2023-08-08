import mongoose, {Schema, model, Types, ObjectId} from "mongoose"
import { NotificationInterface } from "../types/Notification"

const notificationSchema = new Schema<NotificationInterface>({
    text: {type: String},
    receiver: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    sender: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    notificationType: {type: String, default: ''},
    expire_at: {type: Date, default: Date.now, expires: 172800}
}, {timestamps: true})

notificationSchema.virtual

const Notification = model<NotificationInterface>('Notification', notificationSchema)
export default Notification