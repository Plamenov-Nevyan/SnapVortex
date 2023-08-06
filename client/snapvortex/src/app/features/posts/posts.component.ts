import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  get currentPosts(): Post[]{return this.postsServices.currentPostsDataGet}

  constructor(private postsServices: PostsService){

  }

  ngOnInit(): void {
    this.postsServices.getPostsData()
  }
}
