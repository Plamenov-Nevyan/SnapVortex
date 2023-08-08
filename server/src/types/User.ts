import { ObjectId, Types } from "mongoose"
import { PostInterface } from "./Post"

export interface UserInterface {
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
    createdPosts: Types.ObjectId[],
    likedPosts: Types.ObjectId[],
    sharedPosts: Types.ObjectId[],
    commentedPosts: Types.ObjectId[],
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

export interface UserSocketData {
    socketId: string,
    userId: string
}