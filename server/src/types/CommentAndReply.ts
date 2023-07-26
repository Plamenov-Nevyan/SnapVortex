import { Types, ObjectId } from "mongoose";

export interface Comment {
    author: ObjectId,
    likes: ObjectId[],
    replies: ObjectId[],
    belongsToPost: ObjectId,
    text: string,
    image: string,
    createdAt: string,
}

export interface Reply {
    author: ObjectId,
    likes: ObjectId[],
    belongsToComment: ObjectId,
    text: string,
    image: string,
    createdAt: string,
}