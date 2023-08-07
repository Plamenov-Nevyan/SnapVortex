import Comment from "../models/Comment"
import Post from "../models/Post"
import User from "../models/User"
import { CommentCreateData } from "../types/CommentAndReply"
import { FileProps } from "../types/FileProps"
const uploadFile = require('../utils/googleUpload')



export const createComment = async (postId: string, userId: string, commentData: CommentCreateData, image?: FileProps | null) => {
    let [user, post, resp] = image ? await Promise.all([
        User.findById(userId),
        Post.findById(postId),
        uploadFile(image)
    ]) : await Promise.all([
        User.findById(userId),
        Post.findById(postId),
    ])

    if(user instanceof User && post instanceof Post){
        let newComment = await Comment.create({
            ...commentData,
            author: user._id,
            image: resp !== undefined ? `https://drive.google.com/uc?export=view&id=${resp.data.id}`: ''
        })
        user.commentedPosts.push(newComment._id)
        post.comments.unshift(newComment._id)
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
            select: 'createdAt',
            options: {sort: {createdAt: 1}},
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
            select: 'createdAt',
            populate: {
                path: 'author',
            }
        })
    }
}