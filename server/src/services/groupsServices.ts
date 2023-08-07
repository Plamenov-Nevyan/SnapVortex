import { ObjectId, Types } from "mongoose"
import Group from "../models/Group"
import User from "../models/User"
import { GroupInterface } from "../types/Group"
import { FileProps } from "../types/FileProps"
const uploadFile = require('../utils/googleUpload')

export const createGroup = async (groupData: GroupInterface, userId:unknown) => {
    let [isGroupExisting, user] = await Promise.all([
        Group.findOne({name: groupData.name}),
        User.findById(userId)
    ])
    if(!isGroupExisting){
        groupData.owner = userId as Types.ObjectId
       let newGroup = await Group.create({...groupData})
       user?.groupsCreated.push(newGroup._id)
       await user?.save()
       newGroup = await newGroup.populate('members')
       return newGroup
    }
}

export const getGroupProfile = async (groupId: string) => {
    let group = await Group.findById(groupId)
    .populate('owner')
    .populate('postsCreated')
    .populate('members')
    return group
}

export const editGroupData = async (editData: GroupInterface, groupId: string) => {
    let group = await Group.findByIdAndUpdate(groupId, editData, {new: true})
    return group
}

export const updateCoverPicture = async (picture: FileProps | undefined, groupId: string) => {
    let [resp, group] = await Promise.all([
        await uploadFile(picture),
        await Group.findById(groupId)
    ])
    if(group instanceof Group){
        group.coverPicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await group.save()
        return group.coverPicture
    }
}

export const updateProfilePicture = async (picture: FileProps | undefined, groupId: string) => {
    let [resp, group] = await Promise.all([
        await uploadFile(picture),
        await Group.findById(groupId)
    ])
    if(group instanceof Group){
        group.profilePicture =  `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        await group.save()
        return group.profilePicture
    }
}