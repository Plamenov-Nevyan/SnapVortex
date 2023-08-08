import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Comment } from 'src/app/types/Comment';
import { commentInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.css']
})
export class CommentsListItemComponent implements OnInit {
  @Input() comment: Comment = commentInitValues
  @Input() postId: string = ''
  userId: string | null = ''
  isLiked: boolean = false
  replyInit: boolean = false
  showReplyList:boolean = false

  constructor(
    private sessionServices: SessionStorageService,
    private postService: PostsService
  ){

  }

  ngOnInit(): void {
    console.log(this.comment)
    this.userId = this.sessionServices.getUserId()
    this.isLiked = this.comment.likes.some(user => user._id === this.userId)
    console.log(this.isLiked)
  }
  
onReplyInit(event: MouseEvent){
  if(event.target instanceof HTMLButtonElement){
    this.replyInit = true
  }
}
showHideRepliesList(event: MouseEvent){
  event.preventDefault()
  this.showReplyList ? this.showReplyList = false : this.showReplyList = true
  }

  onCommentLike(event: MouseEvent){
    this.postService.likeComment(this.postId, this.userId, this.comment._id)
  }
  onCommentDislike(event: MouseEvent){
    this.postService.dislikeComment(this.postId, this.userId, this.comment._id)
  }
}
