import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ProfileService } from 'src/app/features/profile.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Comment } from 'src/app/types/Comment';
import { ReplyCreateData } from 'src/app/types/Reply';
import { User } from 'src/app/types/User';
import { UserInitValues, commentInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-replies-list',
  templateUrl: './replies-list.component.html',
  styleUrls: ['./replies-list.component.css']
})
export class RepliesListComponent implements OnInit{
  @Input() comment: Comment = commentInitValues
  @Input() replyInit: boolean = false
  @Input() openReplyList: boolean = false
  userId: string | null  = ''
  user: User = UserInitValues
  replyData: ReplyCreateData = {
  text: '',
  image: null,
}
replyImgPreview: string = ''
  constructor(
    private sessionServices: SessionStorageService,
    private profileServices: ProfileService,
    private postServices: PostsService
  ){

  }

  ngOnInit(): void {
    this.userId = this.sessionServices.getUserId()
  this.profileServices.getProfileData()
    this.profileServices.currentProfileData$.subscribe({
      next: (profileData) => this.user = {...profileData}
    })
  }


  onSelectReplyImage(event: Event){
    if(event.target instanceof HTMLInputElement){
      if(event.target.files instanceof FileList){
        this.replyData.image = event.target.files[0]
        let fileReader = new FileReader()
        fileReader.onload = () => {
          this.replyImgPreview = fileReader.result as string
        }
        fileReader.readAsDataURL(this.replyData.image)
      }
    }
  }
onReplyChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.replyData = {...this.replyData, text: event.target.value}
    }
  }

onCancelReply(){
    this.replyInit = false
  }
onCreateReply(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLButtonElement){
      this.postServices.replyToComment(event.target.classList[0].split('|')[0], event.target.classList[0].split('|')[1], this.replyData)
    }
  }
}
