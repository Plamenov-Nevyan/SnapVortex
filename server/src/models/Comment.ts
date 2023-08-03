import {Schema, model, Types, ObjectId} from "mongoose"
import { CommentInterface } from "../types/CommentAndReply"

const commentSchema = new Schema<CommentInterface>({
    text: {type: String},
    image: {type: String},
    author: {type : Types.ObjectId, ref: 'User'},
    likes: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    replies: [
        {
            type : Types.ObjectId,
            ref: 'Reply'
        }
    ],
    belongsToPost: {type: Types.ObjectId, ref: 'Post'}
}, {timestamps: true})

const Comment = model<CommentInterface>('Comment', commentSchema)
export default Comment