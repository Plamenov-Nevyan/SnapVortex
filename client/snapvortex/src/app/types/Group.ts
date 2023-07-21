export interface Group {
    owner: string,
    about: string,
    isPrivate: boolean,
    postsCreated: string[],
    members: string[],
    profilePicture: string,
    coverPicture: string,
    rules: string[]
}