import {Schema, model, Types, ObjectId} from "mongoose"
import { ReplyInterface } from "../types/CommentAndReply"

const replySchema = new Schema<ReplyInterface>({
    text: {type: String},
    image: {type: String},
    author: {type : Types.ObjectId, ref: 'User'},
    taggedUser: {type : Types.ObjectId, ref: 'User'},
    likes: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    belongsToComment: {type: Types.ObjectId, ref: 'Comment'}
}, {timestamps: true})

const Reply = model<ReplyInterface>('Reply', replySchema)
export default Reply