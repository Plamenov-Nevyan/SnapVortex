export interface Group {
    owner: string,
    description: string,
    isPrivate: boolean,
    postsCreated: string[],
    members: string[],
    profilePicture: string,
    coverPicture: string,
    rules: string[],
    name: string,
    _id: string
}