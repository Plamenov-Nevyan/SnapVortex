import { ObjectId } from "mongoose";

export interface Group {
    owner: ObjectId,
    about: string,
    isPrivate: boolean,
    postsCreated: ObjectId[],
    members: ObjectId[],
    profilePicture: string,
    coverPicture: string,
    rules: string[]
}