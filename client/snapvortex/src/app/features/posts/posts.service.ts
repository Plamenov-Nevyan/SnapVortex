import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Post, PostEditData } from 'src/app/types/Post';
import { SessionStorageService } from 'src/app/session-storage.service';
import { BehaviorSubject } from 'rxjs';
import { CommentCreateData } from 'src/app/types/Comment';

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
    COMMENT_POST: '/posts/comment/'
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
}
