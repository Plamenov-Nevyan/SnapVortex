import { User } from "./User"
import { Comment } from "./Comment"

export interface Reply {
    text: string,
    image: string,
    author: User,
    likes: User[],
    belongsToComment: string,
    createdAt: string,
    _id: string
}

export interface ReplyCreateData {
    text: string,
    image: File | null,
}