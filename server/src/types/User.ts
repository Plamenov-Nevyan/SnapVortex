import { ObjectId, Types } from "mongoose"
import { Post } from "./Post"

export interface User {
    username: string,
    email: string,
    password: string,
    about: {
        workplace: string,
        address: string,
        description: string,
        personalWebsite: {
            url: string,
            preview: Blob | null | string 
        }
    },
    profilePicture: string,
    coverPicture: string,
    createdPosts: Post[],
    likedPosts: Types.ObjectId[],
    sharedPosts: Types.ObjectId[],
    commentedPosts: Types.ObjectId[],
    pagesOwned: Types.ObjectId[],
    pagesFollowed: Types.ObjectId[],
    groupsCreated: Types.ObjectId[],
    groupsJoined: Types.ObjectId[],
    friends: Types.ObjectId[],
    photos: string[], 
    gender: string
}

export interface UserAboutData {
    workplace: string,
    address: string,
    description: string,
    personalWebsite: {
        url: string,
        preview: Blob | null | string
    }
}