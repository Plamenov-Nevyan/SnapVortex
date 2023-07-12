import {Schema, model, Types, ObjectId} from "mongoose"
import { User } from "../types/User"

const userSchema = new Schema<User>({
    username: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
}, {timestamps: true})

const UserSchema = model<User>('UserSchema', userSchema)
export default UserSchema