import mongoose, {Schema, model, Types, ObjectId} from "mongoose"
import { UserInterface } from "../types/User"

const userSchema = new Schema<UserInterface>({
    username: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
    about: {
        workplace: {type: String, default: ''},
        address: {type: String, default: ''},
        description: {type: String, default: ''},
        personalWebsite: {
            url: {type: String, default: ''},
            preview: {type: String, default: ''}
        }
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
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Page'
        }
    ],
    pagesFollowed: [
        {
            type : Types.ObjectId,
            ref: 'Page'
        }
    ],

    groupsCreated: [
        {
            type: Types.ObjectId,
            ref: 'Group'
        }
    ],

    groupsJoined: [
        {
            type: Types.ObjectId,
            ref: 'Group'
        }
    ],
    friends: [
        {
            type: Types.ObjectId,
            ref: 'User'
        }
    ],
    photos: []
}, {timestamps: true})

const User = model<UserInterface>('User', userSchema)
export default User

// createdPosts: Post[],
// likedPosts: ObjectId[],
// sharedPosts: ObjectId[],
// commentedPosts: ObjectId[]