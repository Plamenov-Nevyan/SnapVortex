import UserSchema from "../models/User"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import { User } from "../types/User"
import env from "../config/envConfig"
import { Types } from "mongoose"

export const registerUser = async (userData : User) => {
   let isUserExisting = await checkIfUserExists(userData.email)
   if(!isUserExisting){
    try{
    let hash = await bcryptjs.hash(userData.password, env.SALT_ROUNDS)
    userData.password = hash
    return UserSchema.create({
        ...userData
    })
     }catch(err){
        throw new Error(err.message)
     }
   }else {
    throw new Error('Email is not available!')
   }
}

const checkIfUserExists = (email:string) => UserSchema.exists({email}).exec() 

export const loginUser = async (userData: User) => {
    let user = await UserSchema.findOne({email: userData.email})
    if(user){
        let isPassCorrect = await bcryptjs.compare(userData.password, user?.password)
        if(isPassCorrect){
            let session = createSession(
                user.username, 
                user.email, 
                user.id,
                 )
            return session
        }else {
            throw new Error('Email and/or password is incorrect!')
        }
    }else {
        throw new Error('Email and/or password is incorrect!')
    }
}

export const createSession = (
    username: string, 
    email: string, 
    id: Types.ObjectId, 
    ) => {
    const payload = {
        username,
        email,
        id,
    }
    let accessToken = jsonwebtoken.sign(payload, env.JWT_SECRET)
    return {
        username,
        email,
        id,
        accessToken
    }
}
