import { Group } from "./Group"
import { Page } from "./Page"
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
    likedPosts: Post[],
    sharedPosts: Post[],
    commentedPosts: Post[],
    pagesOwned: Page[],
    pagesFollowed: Page[],
    groupsCreated: Group[],
    groupsJoined: Group[],
    friends: User[],
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