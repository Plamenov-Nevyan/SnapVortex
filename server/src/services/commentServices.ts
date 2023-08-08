import Comment from "../models/Comment"
import Post from "../models/Post"
import Reply from "../models/Reply"
import User from "../models/User"
import { CommentCreateData, ReplyCreateData } from "../types/CommentAndReply"
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
            image: resp !== undefined ? `https://drive.google.com/uc?export=view&id=${resp.data.id}`: '',
            belongsToPost: postId
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
            path : 'replies',
            strictPopulate: false,
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'author',
                strictPopulate: false
            },
        })
        .populate({
            path: 'replies',
            options: {sort: {createdAt: -1}},
            strictPopulate: false,
            populate: {
                path: 'likes',
                strictPopulate: false
            },
        })
        .populate({
            path: 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'author',
            }
        })
        .exec()
    }
}

export const createReply = async (commentId: string, userId: string, replyData: ReplyCreateData, image?: FileProps | null) => {
    let[comment, resp] = image ? await Promise.all([
        Comment.findById(commentId),
        uploadFile(image)
    ]) : [await Comment.findById(commentId)]

    if(comment instanceof Comment){
        let reply = await Reply.create({
            ...replyData,
            author: userId,
            image: resp !== undefined ? `https://drive.google.com/uc?export=view&id=${resp.data.id}`: '',
            belongsToComment: comment._id
        })
        if(reply instanceof Reply){
            comment.replies.push(reply._id)
            await comment.save()
        }
        return Comment.findById(commentId)
        .populate('author')
        .populate('likes')
        .populate({
            path : 'replies',
            options: {sort: {createdAt: -1}},
            strictPopulate: false,
            populate: {
                path: 'author',
                strictPopulate: false,
            },
        })
        .populate({
            path: 'replies',
            options: {sort: {createdAt: -1}},
            strictPopulate: false,
            populate: {
                path: 'likes',
                strictPopulate: false,
            },
        })
        .exec()
    }
}

export const likeComment = async (commentId: string, userId: string) => {
    let [comment, user] = await Promise.all([
        Comment.findById(commentId),
        User.findById(userId)
    ])
    if(comment instanceof Comment && user instanceof User){
        comment.likes.push(user._id)
        await comment.save()
        return Post.findById(comment.belongsToPost)
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'replies',
                options: {sort: {createdAt: 1}},
                strictPopulate: false,
                populate: {
                    path: 'author',
                    strictPopulate: false,
                }
            },
        })
        .populate({
            path: 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'replies',
                options: {sort: {createdAt: 1}},
                strictPopulate: false,
                populate: {
                    path: 'likes',
                    strictPopulate: false,
                }
            }
        })
        .populate({
            path: 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'author',
            }
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'likes',
            }
        })
        .exec()
    }
}

export const dislikeComment = async (commentId: string, userId: string) => {
    let [comment, user] = await Promise.all([
        Comment.findById(commentId),
        User.findById(userId)
    ])
    if(comment instanceof Comment && user instanceof User){
        console.log(comment.likes)
        comment.likes.splice(comment.likes.indexOf(user._id), 1)
        console.log(comment.likes)
        await comment.save()
        return Post.findById(comment.belongsToPost)
        .populate('author')
        .populate('belongsToGroup')
        .populate('shares')
        .populate('likes')
        .populate({
            path : 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'replies',
                options: {sort: {createdAt: 1}},
                strictPopulate: false,
                populate: {
                    path: 'author',
                    strictPopulate: false,
                }
            },
        })
        .populate({
            path: 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'replies',
                options: {sort: {createdAt: 1}},
                strictPopulate: false,
                populate: {
                    path: 'likes',
                    strictPopulate: false,
                }
            }
        })
        .populate({
            path: 'comments',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'author',
            }
        })
        .populate({
            path: 'comments',
            populate: {
                path: 'likes',
            }
        })
        .exec()
    }
}

export const likeReply = async (replyId:string, userId:string) => {
    let [reply, user] = await Promise.all([
        Reply.findById(replyId),
        User.findById(userId)
    ])

    if(reply instanceof Reply && user instanceof User){
        reply.likes.push(user._id)
        await reply.save()
        return Reply.findById(replyId)
        .populate('author')
        .populate('likes')
    }
}

export const dislikeReply = async (replyId:string, userId:string) => {
    let [reply, user] = await Promise.all([
        Reply.findById(replyId),
        User.findById(userId)
    ])

    if(reply instanceof Reply && user instanceof User){
        reply.likes.splice(reply.likes.indexOf(user._id), 1)
        await reply.save()
        return Reply.findById(replyId)
        .populate('author')
        .populate('likes')
    }
}