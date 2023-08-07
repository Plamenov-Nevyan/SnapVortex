import { Types, ObjectId } from "mongoose";

export interface CommentInterface {
    author: ObjectId,
    likes: ObjectId[],
    replies: ObjectId[],
    belongsToPost: ObjectId,
    text: string,
    image: string,
    createdAt: string,
}

export interface ReplyInterface {
    author: ObjectId,
    likes: ObjectId[],
    belongsToComment: ObjectId,
    text: string,
    image: string,
    createdAt: string,
    taggedUser: ObjectId
}

export interface CommentCreateData {
    text: string,
    image: File | null
}