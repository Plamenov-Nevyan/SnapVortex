import { ObjectId } from "mongoose";

export interface Page {
    owner: ObjectId,
    followers: ObjectId[],
    name: string,
    profilePicture: string,
    coverPicture: string,
    about: {
        description: string,
        adress: string
    },
    postsCreated: ObjectId[],
    createdAt: string
}