import mongoose, {Schema, model, Types, ObjectId} from "mongoose"
import { GroupInterface } from "../types/Group"

const groupSchema = new Schema<GroupInterface>({
    owner: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
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
    description: {type: String},
    isPrivate: {type: Boolean},
    profilePicture: {type: String, default: 'https://drive.google.com/uc?export=view&id=1sOf42R3Whb67TScx1zBaasLXRz7dEOcB'},
    coverPicture: {type: String, default: `https://drive.google.com/uc?export=view&id=1fRcB9w3mm_6MYPiIT_BlPDf4T8Mhzac7`},
    rules: [],
    name: {type: String},
}, {timestamps: true})

const Group = model<GroupInterface>('Group', groupSchema)
export default Group
