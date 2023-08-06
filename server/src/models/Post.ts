import mongoose, {Schema, model, Types, ObjectId} from "mongoose"
import { PostInterface } from "../types/Post"
import Comment from "./Comment"
import User from "./User"
import Page from "./Page"
import Group from "./Group"

const postSchema = new Schema<PostInterface>({
    author: {type : mongoose.Schema.Types.ObjectId, ref: User},
    likes: [
        {
            type : Types.ObjectId,
            ref: User
        }
    ],
    comments: [
        {
            type : Types.ObjectId,
            ref: Comment
        }
    ],
    shares: [
        {
            type : Types.ObjectId,
            ref: User
        }
    ],
    text: {type: String},
    image: {type: String},
    belongsToPage: {type: mongoose.Schema.Types.ObjectId, ref: Page},
    belongsToGroup: {type: mongoose.Schema.Types.ObjectId, ref: Group}
}, {timestamps: true})

const Post = model<PostInterface>('Post', postSchema)
export default Post

// author: string,
// likes: string[],
// comments: string[],
// shares: string[],
// text: string,
// image: string,
// createdAt: string,