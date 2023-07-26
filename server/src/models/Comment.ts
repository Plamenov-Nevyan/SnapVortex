import {Schema, model, Types, ObjectId} from "mongoose"
import { Comment } from "../types/CommentAndReply"

const commentSchema = new Schema<Comment>({
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

const CommentSchema = model<Comment>('CommentSchema', commentSchema)
export default CommentSchema