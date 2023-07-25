import { ObjectId } from "mongoose"
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
    likedPosts: ObjectId[],
    sharedPosts: ObjectId[],
    commentedPosts: ObjectId[],
    pagesOwned: ObjectId[],
    pagesFollowed: ObjectId[],
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