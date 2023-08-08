import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ProfileService } from 'src/app/features/profile.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { CommentCreateData } from 'src/app/types/Comment';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';
import { UserInitValues, postInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
 @Input() postArticle: Post = postInitValues
 @Input() commentInit: boolean = false
 @Input() openCommentsList: boolean = false
 userId: string | null  = ''
 user: User = UserInitValues
 isLiked: boolean = false
 commentData: CommentCreateData = {
   text: '',
   image: null
 }
 commentImgPreview: string = ''
 constructor(
  private postServices: PostsService,
  private sessionServices: SessionStorageService,
  private profileServices: ProfileService,
 ){

 }

 ngOnInit(): void {
  this.userId = this.sessionServices.getUserId()
this.profileServices.getProfileData()
  this.profileServices.currentProfileData$.subscribe({
    next: (profileData) => this.user = {...profileData}
  })
}

 onSelectCommentImage(event: Event){
  if(event.target instanceof HTMLInputElement){
    if(event.target.files instanceof FileList){
      this.commentData.image = event.target.files[0]
      let fileReader = new FileReader()
      fileReader.onload = () => {
        this.commentImgPreview = fileReader.result as string
      }
      fileReader.readAsDataURL(this.commentData.image)
    }
  }
}
onCommentChange(event: Event) {
  if(event.target instanceof HTMLTextAreaElement){
    this.commentData = {...this.commentData, text: event.target.value}
  }
}

onCancelComment(){
  this.commentInit = false
}
onCreateComment(event: MouseEvent){
  event.preventDefault()
  this.postServices.commentPost(this.postArticle._id, this.userId, this.commentData)
}

}
