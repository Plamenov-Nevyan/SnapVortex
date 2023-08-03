import { ObjectId, Types } from "mongoose";

export interface GroupInterface {
    owner: Types.ObjectId,
    description: string,
    isPrivate: boolean,
    postsCreated: Types.ObjectId[],
    members: Types.ObjectId[],
    profilePicture: string,
    coverPicture: string,
    rules: string[], 
    name: string
}