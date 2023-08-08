import { User } from "./User"
import {Reply} from "./Reply"

export interface Comment {
    text: string,
    image: string,
    author: User,
    likes: User[],
    replies: Reply[],
    belongsToPost: string,
    createdAt: string,
    _id: string
}

export interface CommentCreateData {
    text: string,
    image: File | null
}