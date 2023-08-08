import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Post, PostEditData } from 'src/app/types/Post';
import { SessionStorageService } from 'src/app/session-storage.service';
import { BehaviorSubject } from 'rxjs';
import { Comment, CommentCreateData } from 'src/app/types/Comment';
import { Reply, ReplyCreateData } from 'src/app/types/Reply';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private currentPostsData: Post[] =  []
  currentPostsData$ = new BehaviorSubject(this.currentPostsData)

  get currentPostsDataGet(){
    return this.currentPostsData
  }
  set currentPostsDataSet(val: Post[]){
    this.currentPostsData =  [...val, ...this.currentPostsData]
    this.currentPostsData$.next(this.currentPostsData)
  }



  private postToDelete: string = ''

  get postToDeleteGet(){
    return this.postToDelete
  }
  set postToDeleteSet(val: string){
    this.postToDelete = val
  }

  endpoints = {
    CREATE_POST: '/posts/create/',
    GET_POSTS_DATA: '/posts/',
    EDIT_POST: '/posts/edit/',
    DELETE_POST: '/posts/delete/',
    LIKE_POST: '/posts/like/',
    DISLIKE_POST: '/posts/dislike/',
    COMMENT_POST: '/posts/comment/',
    COMMENT_REPLY: '/posts/comment/reply/',
    LIKE_COMMENT: '/posts/comment/like/',
    DISLIKE_COMMENT: '/posts/comment/dislike/',
    LIKE_REPLY: '/posts/comment/reply/like/',
    DISLIKE_REPLY: '/posts/comment/reply/dislike/'
  }

  constructor(private http: HttpClient, private sessionServices: SessionStorageService) { }

  createPost(posterId:string, posterType:string, feeling?:string, text?:string, image?:File | null){
    const {baseUrl} = environment
    let formData = new FormData()
    if(image){
      formData.append('image', image)
   }
   if(text && feeling){
    formData.append('createData', JSON.stringify({text, feeling}))
   }else if(text && !feeling){
    formData.append('createData', JSON.stringify({text}))
   }else if(feeling && !text){
    formData.append('createData', JSON.stringify({feeling}))
   }
   this.http.post<Post[]>(`${baseUrl}${this.endpoints.CREATE_POST}${posterType}/${posterId}`, formData ).subscribe({
      next: (newPost: Post[]) => {
        this.currentPostsDataSet = newPost
      }
   })
  }

  getPostsData(userId?:string, groupId?:string){
    const {baseUrl} = environment
      if(userId){
        this.http.get<Post[]>(`${baseUrl}${this.endpoints.GET_POSTS_DATA}${userId}/_`).subscribe({
          next: (posts: Post[]) => {
            console.log(posts)
              this.currentPostsData = []
              this.currentPostsDataSet = posts
          }
        })
      }else {
        this.http.get<Post[]>(`${baseUrl}${this.endpoints.GET_POSTS_DATA}/_/${groupId}`).subscribe({
          next: (posts: Post[]) => {
            console.log(posts)
              this.currentPostsData = []
              this.currentPostsDataSet = posts
          }
        })
      }
  }

  editPost(postId: string, editData: PostEditData){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}
    this.http.post<Post[]>(`${baseUrl}${this.endpoints.EDIT_POST}${postId}`, editData, {headers}).subscribe({
      next: (editedPost) => {
        console.log(editedPost)
        this.currentPostsData.splice(this.currentPostsData.indexOf(editedPost[0]), 1)
        this.currentPostsDataSet = editedPost
      } 
    })
  }

  deletePost(postId:string){
    const {baseUrl} = environment
    this.http.delete(`${baseUrl}${this.endpoints.DELETE_POST}${postId}`).subscribe({
      next: () => {
        let postToDelete = this.currentPostsData.find(post => post._id === postId) as Post
        this.currentPostsData.splice(this.currentPostsData.indexOf(postToDelete), 1)
      }
    })
  }

  likePost(postId:string){
    const {baseUrl} = environment
    this.http.get<Post[]>(`${baseUrl}${this.endpoints.LIKE_POST}${postId}/${this.sessionServices.getUserId()}`).subscribe({
      next: (likedPost) => {
        let postToLike = this.currentPostsData.find(post => post._id === postId) as Post
        this.currentPostsData.splice(this.currentPostsData.indexOf(postToLike), 1, likedPost[0])
        let copy = [...this.currentPostsData]
        this.currentPostsData = []
        this.currentPostsDataSet = copy
      }
    })
  }

  dislikePost(postId:string){
    const {baseUrl} = environment
    this.http.get<Post[]>(`${baseUrl}${this.endpoints.DISLIKE_POST}${postId}/${this.sessionServices.getUserId()}`).subscribe({
      next: (dislikedPost) => {
        let postToDislike = this.currentPostsData.find(post => post._id === postId) as Post
         this.currentPostsData.splice(this.currentPostsData.indexOf(postToDislike), 1, dislikedPost[0])
        let copy = [...this.currentPostsData]
        this.currentPostsData = []
        this.currentPostsDataSet = copy
      }
    })
  }

  commentPost(postId: string, userId: string | null, commentData: CommentCreateData){
    const {baseUrl} = environment
    let formData = new FormData()
    if(commentData.image){
      formData.append('image', commentData.image)
   }
   formData.append('createData', JSON.stringify(commentData))
   this.http.post<Post[]>(`${baseUrl}${this.endpoints.COMMENT_POST}${postId}/${userId}`, formData ).subscribe({
      next: (commentedPost: Post[]) => {
        let postToComment = this.currentPostsData.find(post => post._id === postId) as Post
        this.currentPostsData.splice(this.currentPostsData.indexOf(postToComment), 1, commentedPost[0])
       let copy = [...this.currentPostsData]
       this.currentPostsData = []
       this.currentPostsDataSet = copy
      }
   })
  }

  likeComment(postId: string, userId: string | null, commentId: string){
    const {baseUrl} = environment
    this.http.get<Post[]>(`${baseUrl}${this.endpoints.LIKE_COMMENT}${commentId}/${userId}`).subscribe({
      next: (postWithLikedComment) => {
        let postToReplace = this.currentPostsData.find(post => post._id === postId) as Post
        console.log(postToReplace)
        this.currentPostsData.splice(this.currentPostsData.indexOf(postToReplace), 1, postWithLikedComment[0])
        console.log(this.currentPostsData)
        let copy = [...this.currentPostsData]
        this.currentPostsData = []
        this.currentPostsDataSet = copy
      }
    })
  }

  dislikeComment(postId: string, userId: string | null, commentId: string){
    const {baseUrl} = environment
    this.http.get<Post[]>(`${baseUrl}${this.endpoints.DISLIKE_COMMENT}${commentId}/${userId}`).subscribe({
      next: (postWithDislikedComment) => {
        console.log(postWithDislikedComment)
        let postToReplace = this.currentPostsData.find(post => post._id === postId) as Post
        console.log(postToReplace)
        this.currentPostsData.splice(this.currentPostsData.indexOf(postToReplace), 1, postWithDislikedComment[0])
        let copy = [...this.currentPostsData]
        this.currentPostsData = []
        this.currentPostsDataSet = copy
      }
    })
  }

  replyToComment(commentId: string, userId: string | null, replyData: ReplyCreateData){
    const {baseUrl} = environment
    let formData = new FormData()
    if(replyData.image){
      formData.append('image', replyData.image)
   }
   formData.append('createData', JSON.stringify(replyData))
   this.http.post<Comment>(`${baseUrl}${this.endpoints.COMMENT_REPLY}${commentId}/${userId}`, formData ).subscribe({
      next: (repliedComment: Comment) => {
        let parentPost = this.currentPostsData.find(post => post.comments.some(comment => comment._id === repliedComment._id)) as Post
        let commentToReply = parentPost.comments.find(comment => comment._id === repliedComment._id)
        if(commentToReply) {
          parentPost.comments.splice(parentPost.comments.indexOf(commentToReply), 1, repliedComment)
        }
        this.currentPostsData.splice(this.currentPostsData.indexOf(parentPost), 1, parentPost)
       let copy = [...this.currentPostsData]
       this.currentPostsData = []
       this.currentPostsDataSet = copy
      }
   })
  }

  likeReply(replyId: string, userId: string | null){
    const {baseUrl} = environment
   this.http.get<Reply>(`${baseUrl}${this.endpoints.LIKE_REPLY}${replyId}/${userId}`).subscribe({
      next: (likedReply: Reply) => {
        let parentPost = this.currentPostsData.filter(post => post.comments.some(comment => comment._id === likedReply.belongsToComment))[0]
        let parentComment = parentPost.comments.find(comment => comment.replies.some(reply => reply._id === replyId))
        let replyToReplace = parentComment?.replies.find(reply => reply._id === replyId)
        if(replyToReplace) {
          parentComment?.replies.splice(parentComment.replies.indexOf(replyToReplace), 1, likedReply)
          if(parentComment){
              parentPost.comments.splice(parentPost.comments.indexOf(parentComment), 1, parentComment)
            }
        }
        this.currentPostsData.splice(this.currentPostsData.indexOf(parentPost), 1, parentPost)
       let copy = [...this.currentPostsData]
       this.currentPostsData = []
       this.currentPostsDataSet = copy
      }
   })
  }

  dislikeReply(replyId: string, userId: string | null){
    const {baseUrl} = environment
   this.http.get<Reply>(`${baseUrl}${this.endpoints.DISLIKE_REPLY}${replyId}/${userId}`).subscribe({
      next: (dislikedReply: Reply) => {
        let parentPost = this.currentPostsData.filter(post => post.comments.some(comment => comment._id === dislikedReply.belongsToComment))[0]
        let parentComment = parentPost.comments.find(comment => comment.replies.some(reply => reply._id === replyId))
        let replyToReplace = parentComment?.replies.find(reply => reply._id === replyId)
        if(replyToReplace) {
          parentComment?.replies.splice(parentComment.replies.indexOf(replyToReplace), 1, dislikedReply)
          if(parentComment){
              parentPost.comments.splice(parentPost.comments.indexOf(parentComment), 1, parentComment)
            }
        }
        this.currentPostsData.splice(this.currentPostsData.indexOf(parentPost), 1, parentPost)
       let copy = [...this.currentPostsData]
       this.currentPostsData = []
       this.currentPostsDataSet = copy
      }
   })
  }

}
