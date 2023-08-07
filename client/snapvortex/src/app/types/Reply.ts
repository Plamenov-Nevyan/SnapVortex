import { User } from "./User"
import { Comment } from "./Comment"

export interface Reply {
    text: string,
    image: string,
    author: User,
    likes: User[],
    belongsToComment: Comment,
    createdAt: string,
    taggedUser: string
}