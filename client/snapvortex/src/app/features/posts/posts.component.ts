import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from 'src/app/types/Post';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { SessionStorageService } from 'src/app/session-storage.service';
import { postInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  currentPosts: Post[] = []
  userId: string | null = ''

  constructor(private postsServices: PostsService, private profileServices: ProfileService, private sessionServices: SessionStorageService){

  }

  ngOnInit(): void {
    this.userId = this.sessionServices.getUserId()
    if(this.userId){
      this.postsServices.getPostsData(this.userId)
      this.postsServices.currentPostsData$.subscribe({
        next: (posts) => {
          console.log(posts)
          this.currentPosts = [...posts]
        }
      })
    }
  }
}
