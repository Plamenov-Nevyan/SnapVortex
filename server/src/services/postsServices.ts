import { ObjectId, Types } from "mongoose"
import Post from "../models/Post"
import User from "../models/User"
import Page from "../models/Page"
import { GroupInterface } from "../types/Group"
import { FileProps } from "../types/FileProps"
import { PostCreateData, PostEditData, PostInterface } from "../types/Post"
import Group from "../models/Group"
const uploadFile = require('../utils/googleUpload')

export const getPostsData = async (userId: string) => {
    let user = await User.findById(userId)
    if(user instanceof User){
        if(
            user.createdPosts.length > 0 || 
            user.likedPosts.length > 0 || 
            user.sharedPosts.length > 0 ||
            user.commentedPosts.length > 0
        ){
            await Promise.all([
                user.populate('createdPosts'),
                user.populate('likedPosts'),
                user.populate('sharedPosts')
            ])
            return [...user.createdPosts, ...user.likedPosts, ...user.sharedPosts].sort(
                (a: any, b: any) => a.createdAt - b.createdAt
                )
        }else {
            return []
        }
    }
} 

export const createPost = async (
    createData: PostCreateData, 
    posterType: string,
    posterId: string,
    image?:FileProps | null
) => {
        let resp, poster, group, newPost 
        if(image){
            resp = await uploadFile(image)
            createData.image = `https://drive.google.com/uc?export=view&id=${resp.data.id}`
        }
        switch(posterType){
            case 'user' : poster = await User.findById(posterId); break
            case 'page' : poster = await Page.findById(posterId); break
            case 'group' : [poster, group] = await Promise.all([
                await User.findById(posterId.split('|')[0]),
                await Group.findById(posterId.split('|')[1])
            ]); break
        }
        if(poster instanceof User){
            newPost = await Post.create({
                ...createData,
                author: poster._id
            })
            poster.createdPosts.push(newPost._id)
            await poster.save()
        }else if(poster instanceof Page){
            newPost = await Post.create({
                ...createData,
                belongsToPage: poster._id
            })
            poster.postsCreated.push(newPost._id)
            await poster.save()
        }else if(group instanceof Group && poster instanceof User) {
            newPost = await Post.create({
                ...createData,
                belongsToGroup: group._id
            })
            group.postsCreated.push(newPost._id)
            poster.createdPosts.push(newPost._id)
            await Promise.all([
                poster.save(),
                group.save()
            ])
        }
        return newPost
}

export const editPost = async (editData: PostEditData, postId: string) => {
    let updatedPost = await Post.findByIdAndUpdate(postId, editData, {new: true})
    console.log(editData)
    return updatedPost
}

export const deletePost = async (postId: string) => {
    await Post.findByIdAndDelete(postId)
}