import { Types, ObjectId } from "mongoose";

export interface PostInterface {
    author: Types.ObjectId,
    likes: Types.ObjectId[],
    comments: Types.ObjectId[],
    shares: Types.ObjectId[],
    text: string,
    image: string,
    belongsToPage: Types.ObjectId,
    belongsToGroup: Types.ObjectId,
    createdAt: string,
}