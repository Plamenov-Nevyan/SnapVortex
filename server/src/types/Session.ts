import { Types, ObjectId } from "mongoose"

export interface Session {
    username: string,
    email: string,
    id: Types.ObjectId,
    accessToken: string
}