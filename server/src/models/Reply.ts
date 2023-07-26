import {Schema, model, Types, ObjectId} from "mongoose"
import { Reply } from "../types/CommentAndReply"

const replySchema = new Schema<Reply>({
    text: {type: String},
    image: {type: String},
    author: {type : Types.ObjectId, ref: 'User'},
    likes: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    belongsToComment: {type: Types.ObjectId, ref: 'Comment'}
}, {timestamps: true})

const ReplySchema = model<Reply>('ReplySchema', replySchema)
export default ReplySchema