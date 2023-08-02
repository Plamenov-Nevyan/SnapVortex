import { ObjectId, Types } from "mongoose"
import GroupSchema from "../models/Group"
import UserSchema from "../models/User"
import { Group } from "../types/Group"
import { group } from "console"
import { FileProps } from "../types/FileProps"
const uploadFile = require('../utils/googleUpload')

export const createGroup = async (groupData: Group, userId:unknown) => {
    let [isGroupExisting, user] = await Promise.all([
        GroupSchema.findOne({name: groupData.name}),
        UserSchema.findById(userId)
    ])
    if(!isGroupExisting){
        groupData.owner = userId as Types.ObjectId
       let newGroup = await GroupSchema.create({...groupData})
       user?.groupsCreated.push(newGroup._id)
       await user?.save()
       return newGroup
    }
}

export const getGroupProfile = async (groupId: string) => {
    let group = await GroupSchema.findById(groupId)
    return group
}

export const editGroupData = async (editData: Group, groupId: string) => {
    let group = await GroupSchema.findByIdAndUpdate(groupId, editData, {new: true})
    return group
}

export const updateCoverPicture = async (picture: FileProps | undefined, groupId: string) => {
    let [resp, group] = await Promise.all([
        await uploadFile(picture),
        await GroupSchema.findById(groupId)
    ])
    if(group instanceof GroupSchema){
        group.coverPicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await group.save()
        return group.coverPicture
    }
}