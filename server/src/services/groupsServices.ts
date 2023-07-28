import { ObjectId } from "mongoose"
import GroupSchema from "../models/Group"
import UserSchema from "../models/User"
import { Group } from "../types/Group"
const uploadFile = require('../utils/googleUpload')

export const createGroup = async (groupData: Group, userId:unknown) => {
    let isGroupExisting = await GroupSchema.findOne({name: groupData.name})
    if(!isGroupExisting){
        groupData.owner = userId as ObjectId
       let newGroup = await GroupSchema.create({...groupData})
       return newGroup
    }
}

export const getGroupProfile = async (groupId: string) => {
    let group = await GroupSchema.findById(groupId)
    return group
}