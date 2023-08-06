import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Page } from 'src/app/types/Page';
import { User } from 'src/app/types/User';
import { UserInitValues, pageInitValues } from 'src/app/types/typesInitValues';
import { PostsService } from 'src/app/features/posts/posts.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent {
 @Input() page: Page = pageInitValues
 @Input() user: User = UserInitValues
 @Input() activeTab: string = ''
 @Input()isOwner:boolean = false
 @Input()isFollower:boolean = false
 get postsData(): Post[] { return this.postServices.currentPostsDataGet}
  constructor(private modalInteraction: ModalInteractionsService, private postServices: PostsService) {
    
  }
  onAddDescription(){
    this.modalInteraction.onShowModal('edit-group-description')
  }
  onAddAddress(){
    this.modalInteraction.onShowModal('edit-group-address')
  }
}
