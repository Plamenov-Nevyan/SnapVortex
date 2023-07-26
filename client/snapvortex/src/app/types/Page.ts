export interface Page {
    owner: string,
    followers: string[],
    name: string,
    profilePicture: string,
    coverPicture: string,
    about: {
        description: string,
        address: string
    },
    postsCreated: string[],
    createdAt: string
}