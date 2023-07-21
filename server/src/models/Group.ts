import {Schema, model, Types, ObjectId} from "mongoose"
import { Group } from "../types/Group"

const groupSchema = new Schema<Group>({
    owner: {type : Types.ObjectId, ref: 'User'},
    members: [
        {
            type : Types.ObjectId,
            ref: 'User'
        }
    ],
    postsCreated: [
        {
            type : Types.ObjectId,
            ref: 'Post'
        }
    ],
    about: {type: String},
    isPrivate: {type: Boolean},
    profilePicture: {type: String, default: 'https://drive.google.com/uc?export=view&id=1sOf42R3Whb67TScx1zBaasLXRz7dEOcB'},
    coverPicture: {type: String, default: `https://drive.google.com/uc?export=view&id=1fRcB9w3mm_6MYPiIT_BlPDf4T8Mhzac7`},
    rules: []
}, {timestamps: true})

const GroupSchema = model<Group>('GroupSchema', groupSchema)
export default GroupSchema
