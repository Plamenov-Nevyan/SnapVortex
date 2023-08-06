import { Component, Input } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input() activeTab: string = ''
  @Input() user: User = UserInitValues
  @Input()isOwner:boolean = false
  get postsData(): Post[] { return this.postServices.currentPostsDataGet}
  
  constructor(
    private modalInteraction: ModalInteractionsService, 
    private sessionServices: SessionStorageService,
    private postServices: PostsService
    ) {

  }

  onAddDescription(){
    this.modalInteraction.onShowModal('edit-user-description')
  }
  onAddAddress(){
    this.modalInteraction.onShowModal('edit-user-address')
  }
  onAddWorkplace(){
    this.modalInteraction.onShowModal('edit-user-workplace')
  }
  onAddWebsite(){
    this.modalInteraction.onShowModal('edit-user-personalWebsite')
  }
}
