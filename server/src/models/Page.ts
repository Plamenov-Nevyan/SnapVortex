import mongoose, {Schema, model, Types, ObjectId, mongo} from "mongoose"
import { Page } from "../types/Page"

const pageSchema = new Schema<Page>({
    owner: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    followers: [
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
    name: {type: String},
    profilePicture: {type: String,  default: 'https://drive.google.com/uc?export=view&id=1sRA2JfKq8o_4Fwp96vrqMFPx9pSCGXVV'},
    coverPicture: {type: String, default: `https://drive.google.com/uc?export=view&id=1fRcB9w3mm_6MYPiIT_BlPDf4T8Mhzac7`},
    about: {
        description: String,
        address: String
    }
}, {timestamps: true})

const PageSchema = model<Page>('PageSchema', pageSchema)
export default PageSchema
