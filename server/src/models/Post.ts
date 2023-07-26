import {Schema, model, Types, ObjectId} from "mongoose"
import { Post } from "../types/Post"

const postSchema = new Schema<Post>({
    author: {type : Types.ObjectId, ref: 'User'},
    likes: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type : Types.ObjectId,
            ref: 'Comment'
        }
    ],
    shares: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    text: {type: String},
    image: {type: String},
    belongsToPage: {type: Types.ObjectId, ref: 'Page'}
}, {timestamps: true})

const PostSchema = model<Post>('PostSchema', postSchema)
export default PostSchema

// author: string,
// likes: string[],
// comments: string[],
// shares: string[],
// text: string,
// image: string,
// createdAt: string,