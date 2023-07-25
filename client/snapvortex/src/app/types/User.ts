import { Post } from "./Post"
// import {FileProps} from './FileProps'

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
            preview: string
        }
    },
    profilePicture: string,
    coverPicture: string,
    createdPosts: Post[],
    likedPosts: string[],
    sharedPosts: string[],
    commentedPosts: string[],
    pagesOwned: string[],
    pagesFollowed: string[],
    photos: string[], 
    gender: string
}

export interface UserRegisterData {
    username: string
    email: string,
    password: string,
    confPassword: string,
    gender: string
}

export interface UserLoginData {
    email: string,
    password: string,
}

export interface UserEditData {
    name: string,
    value: string | File | null
}

export interface UserAboutData {
    workplace: string,
    address: string,
    description: string,
    personalWebsite: {
        url: string,
        preview: Blob | null
    }
}