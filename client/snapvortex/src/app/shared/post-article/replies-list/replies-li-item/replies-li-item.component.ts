import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Reply } from 'src/app/types/Reply';
import { replyInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-replies-li-item',
  templateUrl: './replies-li-item.component.html',
  styleUrls: ['./replies-li-item.component.css']
})
export class RepliesLiItemComponent implements OnInit {
  @Input() reply: Reply = replyInitValues
  userId: string | null = ''
  isLiked: boolean = false

  constructor(
    private postServices: PostsService,
    private sessionServices: SessionStorageService
  ){
  }

  ngOnInit(): void {
    this.userId = this.sessionServices.getUserId()
    this.isLiked = this.reply.likes.some(user => user._id === this.userId)
  }

  onReplyLike(){
    this.postServices.likeReply(this.reply._id, this.userId)
  }

  onReplyDislike(){
    this.postServices.dislikeReply(this.reply._id, this.userId)
  }
}
