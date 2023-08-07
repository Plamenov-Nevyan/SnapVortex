import { ObjectId, Types } from "mongoose"
import Post from "../models/Post"
import User from "../models/User"
import { GroupInterface } from "../types/Group"
import { UserInterface } from "../types/User"
import { FileProps } from "../types/FileProps"
import { PostCreateData, PostEditData, PostInterface } from "../types/Post"
import Group from "../models/Group"
const uploadFile = require('../utils/googleUpload')

export const getPostsData = async (userId: string, groupId:string) => {
  try{
      console.log(userId)
      console.log(groupId)
    let profile = userId !== '' ? await User.findById(userId) : await Group.findById(groupId)
    let posts
    if(profile instanceof User){
        posts = await Post.find({
            $or:[
                {author: profile._id}, 
                {author: {$in: profile.friends}},
                {belongsToGroup: {$in: profile.groupsJoined}}, 
                {belongsToGroup: {$in: profile.groupsCreated}}
            ]
        }).sort({createdAt: 1})
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            populate: {
                path: 'replies',
                populate: {
                    path: 'author',
                }
            },
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
            }
        })
    }else if(profile instanceof Group){
        posts = await Post.find({belongsToGroup: profile._id})
        .sort({createdAt: 1})
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            populate: {
                path: 'replies',
                populate: {
                    path: 'author',
                }
            },
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
            }
        })
    
    }
    return posts
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
            case 'group' : [poster, group] = await Promise.all([
                await User.findById(posterId.split('|')[0]),
                await Group.findById(posterId.split('|')[1])
            ]); break
        }
        if(poster instanceof User && !group){
            newPost = await Post.create({
                ...createData,
                author: poster._id
            })
            poster.createdPosts.push(newPost._id)
            await Promise.all([
                poster.save(),
                newPost.populate('author')
            ])
        }else if(group instanceof Group && poster instanceof User) {
            newPost = await Post.create({
                ...createData,
                author: poster._id,
                belongsToGroup: group._id
            })
            group.postsCreated.push(newPost._id)
            poster.createdPosts.push(newPost._id)
            await Promise.all([
                poster.save(),
                group.save(),
                newPost.populate('belongsToGroup'),
                newPost.populate('author')
            ])
        }
        return newPost
}

export const editPost = async (editData: PostEditData, postId: string) => {
    let updatedPost = await Post.findByIdAndUpdate(postId, editData, {new: true})
    .populate('author')
    .populate('belongsToGroup')
    .populate('shares')
    .populate('likes')
    .populate({
        path : 'comments',
        populate: {
            path: 'replies',
            options: {sort: {createdAt: 1}},
            populate: {
                path: 'author',
            }
        },
    })
    .populate({
        path: 'comments',
        populate: {
            path: 'author',
        }
    })
    return updatedPost
}

export const deletePost = async (postId: string) => {
    await Post.findByIdAndDelete(postId)
}

export const likePost = async (postId: string, userId: string) => {
    let [user, post] = await Promise.all([
        User.findById(userId),
        Post.findById(postId)
    ])

   if(user instanceof User && post instanceof Post){
        post.likes.push(user._id)
        user.likedPosts.push(post._id)
        await Promise.all([
            user.save(),
            post.save()
        ])
        return Post.findById(postId)
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            populate: {
                path: 'replies',
                populate: {
                    path: 'author',
                }
            },
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
            }
        })
   }
}

export const dislikePost = async (postId: string, userId: string) => {
    let [user, post] = await Promise.all([
        User.findById(userId),
        Post.findById(postId)
    ])

   if(user instanceof User && post instanceof Post){
        let userIndex = post.likes.indexOf(user._id)
        post.likes.splice(userIndex, 1)
        let postIndex = user.likedPosts.indexOf(post._id)
        user.likedPosts.splice(postIndex, 1)
        await Promise.all([
            user.save(),
            post.save()
        ])
        return Post.findById(postId)
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            populate: {
                path: 'replies',
                populate: {
                    path: 'author',
                }
            },
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
   }
}