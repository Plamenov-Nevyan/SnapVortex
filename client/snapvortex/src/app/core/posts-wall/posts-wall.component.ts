import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/features/profile.service';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-posts-wall',
  templateUrl: './posts-wall.component.html',
  styleUrls: ['./posts-wall.component.css']
})
export class PostsWallComponent implements OnInit {
  @Input() currentPosts: Post[] = []
  get user(): User{ return this.profileServices.profileDataGet}
  posterId: string = this.user._id
  posterType: string = 'user'

  constructor(private profileServices: ProfileService){}
  ngOnInit(): void {
      this.profileServices.getProfileData()
  }

  onSelectPoster(event: MouseEvent){
    if(event.target instanceof HTMLOptionElement){
      this.posterId = event.target.value
      this.posterType = event.target.classList[0]
    }
  }
}
