import { ObjectId, Types } from "mongoose"
import Post from "../models/Post"
import User from "../models/User"
import Page from "../models/Page"
import { GroupInterface } from "../types/Group"
import { UserInterface } from "../types/User"
import { FileProps } from "../types/FileProps"
import { PostCreateData, PostEditData, PostInterface } from "../types/Post"
import Group from "../models/Group"
const uploadFile = require('../utils/googleUpload')

export const getPostsData = async (userId: string) => {
  try{
    let user = await User.findById(userId)
    if(user instanceof User){
        let posts = await Post.find({
            $or:[
                {author: user._id}, 
                {author: {$in: user.friends}},
                {belongsToPage : {$in : user.pagesFollowed}}, 
                {belongsToPage: {$in: user.pagesOwned}},
                {belongsToGroup: {$in: user.groupsJoined}}, 
                {belongsToGroup: {$in: user.groupsCreated}}
            ]
        }).sort({createdAt: 1})
        .populate('author')
        .populate('belongsToPage')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            populate: {
                path: 'replies',
                model: 'Reply'
            }
        })
        return posts
    }
  }catch(err){
    console.log(err)
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
            await Promise.all([
                poster.save(),
                newPost.populate('author')
            ])
        }else if(poster instanceof Page){
            newPost = await Post.create({
                ...createData,
                belongsToPage: poster._id
            })
            poster.postsCreated.push(newPost._id)
            await Promise.all([
                poster.save(),
                newPost.populate('belongsToPage')
            ])
        }else if(group instanceof Group && poster instanceof User) {
            newPost = await Post.create({
                ...createData,
                belongsToGroup: group._id
            })
            group.postsCreated.push(newPost._id)
            poster.createdPosts.push(newPost._id)
            await Promise.all([
                poster.save(),
                group.save(),
                newPost.populate('belongsToGroup')
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