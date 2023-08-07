import { Comment } from "./Comment"
import { User } from "./User"

export interface Post {
    author: User,
    likes: User[],
    comments: Comment[],
    shares: string[],
    text: string,
    image: string,
    belongsToGroup: string,  
    createdAt: string,
    _id: string
}

export interface PostCreateData {
    text?: string
    image?: File | null
    feeling?: string
}

export interface PostEditData {
    text: string
}