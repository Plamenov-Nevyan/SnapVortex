import { Types, ObjectId } from "mongoose";

export interface Post {
    author: ObjectId,
    likes: ObjectId[],
    comments: ObjectId[],
    shares: ObjectId[],
    text: string,
    image: string,
    belongsToPage: ObjectId 
    createdAt: string,
}