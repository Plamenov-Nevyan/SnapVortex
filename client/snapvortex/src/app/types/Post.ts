export interface Post {
    author: string,
    likes: string[],
    comments: string[],
    shares: string[],
    text: string,
    image: string,
    belongsToPage: string 
    createdAt: string,
}