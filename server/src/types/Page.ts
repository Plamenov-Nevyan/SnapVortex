import { ObjectId, Types } from "mongoose";

export interface Page {
    owner: Types.ObjectId,
    followers: Types.ObjectId[],
    name: string,
    profilePicture: string,
    coverPicture: string,
    about: {
        description: string,
        address: string
    },
    postsCreated: Types.ObjectId[],
    createdAt: string
}