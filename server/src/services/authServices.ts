import UserSchema from "../models/User"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import { User, UserAboutData } from "../types/User"
import env from "../config/envConfig"
import { Types } from "mongoose"
import { FileProps } from "../types/FileProps"
const uploadFile = require('../utils/googleUpload')

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
    console.log(user)
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


export const getProfileData = async (id: string): Promise<User> => {
    let user = await UserSchema.findById(id).select('-password')
if(user){
    return user
}else {
    throw {message: `We weren/'t able to retrieve your profile..`}
}
}


export const updateProfileData = async (userData: UserAboutData, id: string, preview: FileProps | undefined) => {
 if(preview){
    uploadFile(preview)
    .then(async (resp: any) => {      
        try{      // to fix type later ! 
        userData.personalWebsite.preview = `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        let user = await UserSchema.findOne({_id: id})
        if(user instanceof UserSchema){
            console.log(user)
            user.set({
                'about': {
                    description: userData.description ? userData.description : user.about.description,
                    address: userData.address ? userData.address : user.about.address,
                    workplace: userData.workplace ? userData.workplace : user.about.workplace,
                    personalWebsite: {
                        url: userData.personalWebsite.url ? userData.personalWebsite.url : user.about.personalWebsite.url,
                        preview: userData.personalWebsite.preview
                    }
                }
            })
            await user.save()    
         }
        }catch(err){
        }
    })
    .catch((err: Error) =>{ throw err})
 } else {
    let user = await UserSchema.findOne({_id: id})
    if(user instanceof UserSchema){
        user.set({
            'about': {
                description: userData.description ? userData.description : user.about.description,
                address: userData.address ? userData.address : user.about.address,
                workplace: userData.workplace ? userData.workplace : user.about.workplace,
                personalWebsite: {
                    url: userData.personalWebsite.url ? userData.personalWebsite.url : user.about.personalWebsite.url,
                    preview: user.about.personalWebsite.preview
                }
            }
        })
        await user.save()
    }
 }
 return await UserSchema.findById(id).select('-password')
}

export const updateProfilePicture = async (picture:FileProps | undefined, id:string) => {
    let [resp, user] = await Promise.all([
        await uploadFile(picture),
        await UserSchema.findById(id)
    ])
    if(user instanceof UserSchema){
        user.profilePicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await user.save()
        return user.profilePicture
    }
}

export const updateCoverPicture = async (picture:FileProps | undefined, id:string) => {
    let [resp, user] = await Promise.all([
        await uploadFile(picture),
        await UserSchema.findById(id)
    ])
    if(user instanceof UserSchema){
        user.coverPicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await user.save()
        return user.coverPicture
    }
}