import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from 'src/app/types/Post';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  get currentPosts(): Post[]{return this.postsServices.currentPostsDataGet}
  get user(): User {return this.profileServices.profileDataGet}

  constructor(private postsServices: PostsService, private profileServices: ProfileService){

  }

  ngOnInit(): void {
    this.profileServices.getProfileData()
    this.postsServices.getPostsData(this.user._id)
  }
}
