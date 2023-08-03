import { Post } from "./Post"
import { User } from "./User"

export interface Page {
    owner: string,
    followers: User[],
    name: string,
    profilePicture: string,
    coverPicture: string,
    description: string,
    address: string
    postsCreated: Post[],
    createdAt: string,
    _id: string
}

export interface PageEditData {
    name: string,
    value: string,
}

export interface PageEditDataFiltered {
    [k:string]: string | string[]
}