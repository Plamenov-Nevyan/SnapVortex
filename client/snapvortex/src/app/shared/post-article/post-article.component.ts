import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';
import { UserInitValues, postInitValues } from 'src/app/types/typesInitValues';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { ProfileService } from 'src/app/features/profile.service';
import { CommentCreateData } from 'src/app/types/Comment';
import { CreateService } from 'src/app/create-section/create.service';
import { ReplyCreateData } from 'src/app/types/Reply';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
@Input() postArticle: Post = postInitValues
userId: string | null  = ''
user: User = UserInitValues
@Input() isForGroupProfile: boolean = false
@Input() isMember: boolean = false
@Input() isOwnerOfGroup: boolean = false
isOwner: boolean = false
isEditing: boolean = false
isLiked: boolean = false
postEditData = {
  text: this.postArticle.text || ''
}
commentInit: boolean = false
openCommentsList: boolean = false
  constructor(
    private postServices: PostsService,
     private modalInteractions: ModalInteractionsService, 
     private sessionServices: SessionStorageService,
     private profileServices: ProfileService,
     ){

  }

  ngOnInit(): void {
    this.userId = this.sessionServices.getUserId()
    if(this.userId){
      this.isOwner = this.postArticle.author._id === this.userId
      this.isLiked = this.postArticle.likes.some(user => user._id === this.userId)
    }
    this.profileServices.getProfileData()
    this.profileServices.currentProfileData$.subscribe({
      next: (profileData) => this.user = {...profileData}
    })
  }

  onInitEdit(){
    this.isEditing ? this.isEditing = false : this.isEditing = true
  }

  onTextChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.postEditData.text = event.target.value
    }
    console.log(this.postEditData)
  }

  onEdit(event: MouseEvent){
    event.preventDefault()
    this.postServices.editPost(this.postArticle._id, this.postEditData)
    this.onInitEdit()
  }

  onDelete(){
    this.postServices.postToDeleteSet = this.postArticle._id
    this.modalInteractions.onShowModal('delete-confirmation')
  }

  onLikePost(event: MouseEvent){
   if(event.target instanceof HTMLButtonElement){
    console.log(this.isLiked)
     this.postServices.likePost(event.target.classList[0])
   }
  }

  onDislikePost(event: MouseEvent){
    if(event.target instanceof HTMLButtonElement){
      this.postServices.dislikePost(event.target.classList[0])
    }
  }

  onCommentInit(){
    this.commentInit ? this.commentInit = false : this.commentInit = true
  }

  onShowComments(){
    this.openCommentsList ? this.openCommentsList = false : this.openCommentsList = true
  }
}
