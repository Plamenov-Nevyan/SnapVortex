export interface Post {
    author: string,
    likes: string[],
    comments: string[],
    shares: string[],
    text: string,
    image: string,
    belongsToPage: string 
    createdAt: string,
    _id: string
}

export interface PostCreateData {
    text?: string
    image?: File | null
    feeling?: string
}

export interface PostEditData {
    text: string
}