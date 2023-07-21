import {Schema, model, Types, ObjectId} from "mongoose"
import { User } from "../types/User"

const userSchema = new Schema<User>({
    username: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
    about: {
        workplace: {type: String, default: ''},
        adress: {type: String, default: ''},
        description: {type: String, default: ''},
        personalWebsite: {type: String, default: ''}
    },
    profilePicture: {type: String, default: function(){
        if(this.gender === 'male'){
            return `https://drive.google.com/uc?export=view&id=1qh_Ovvyjy_PlEURjxjSNbApYeGDl2ZEI`
        }else {
            return `https://drive.google.com/uc?export=view&id=144ro1eR_sEq1P1RXiuWZR7bx999la46F`
        }
    }},
    coverPicture: {type: String, default: `https://drive.google.com/uc?export=view&id=1fRcB9w3mm_6MYPiIT_BlPDf4T8Mhzac7`},
    gender: {type: String},
    createdPosts: [
        {
            type : Types.ObjectId,
            ref: 'Post'
        }
    ],
    likedPosts:  [
        {
            type : Types.ObjectId,
            ref: 'Post'
        }
    ],
    sharedPosts:  [
        {
            type : Types.ObjectId,
            ref: 'Post'
        }
    ],
    commentedPosts:  [
        {
            type : Types.ObjectId,
            ref: 'Post'
        }
    ],
    pagesOwned: [
        {
            type : Types.ObjectId,
            ref: 'Page'
        }
    ],
    pagesFollowed: [
        {
            type : Types.ObjectId,
            ref: 'Page'
        }
    ],
    photos: []
}, {timestamps: true})

const UserSchema = model<User>('UserSchema', userSchema)
export default UserSchema

// createdPosts: Post[],
// likedPosts: ObjectId[],
// sharedPosts: ObjectId[],
// commentedPosts: ObjectId[]