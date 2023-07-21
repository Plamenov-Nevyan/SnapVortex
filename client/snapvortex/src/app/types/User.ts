import { Post } from "./Post"

export interface User {
    username: string,
    email: string,
    password: string,
    about: {
        workplace: string,
        adress: string,
        description: string,
        personalWebsite: string
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

export interface ProfileMainInfo {
        
}