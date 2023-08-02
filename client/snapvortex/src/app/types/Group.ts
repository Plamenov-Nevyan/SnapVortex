import { Post } from "./Post";
import { User } from "./User";

export interface Group {
    owner: string,
    description: string,
    isPrivate: boolean,
    postsCreated: Post[],
    members: User[],
    profilePicture: string,
    coverPicture: string,
    rules: string[],
    name: string,
    _id: string
}

export interface GroupEditData {
    name: string,
    value: string | boolean
}