export interface Page {
    owner: string,
    followers: string[],
    name: string,
    profilePicture: string,
    coverPicture: string,
    about: {
        description: string,
        adress: string
    },
    postsCreated: string[],
    createdAt: string
}