import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Group } from 'src/app/types/Group';
import { User } from 'src/app/types/User';
import { UserInitValues, groupInitValues } from 'src/app/types/typesInitValues';
import { PostsService } from 'src/app/features/posts/posts.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent implements OnChanges {
 @Input() group: Group = groupInitValues
 @Input() user: User = UserInitValues
 @Input() activeTab: string = ''
 @Input()isOwner:boolean = false
 @Input()isMember:boolean = false
 postsData: Post[] = []
  constructor(private modalInteraction: ModalInteractionsService, private postServices: PostsService) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.group._id !== ''){
      this.postServices.getPostsData(undefined, this.group._id)
      this.postServices.currentPostsData$.subscribe({
        next: (posts) => this.postsData = [...posts]
      })
    }
  }

  onAddDescription(){
    this.modalInteraction.onShowModal('edit-group-description')
  }
}
