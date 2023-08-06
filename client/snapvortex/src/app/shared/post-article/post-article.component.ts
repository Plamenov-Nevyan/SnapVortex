import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Post } from 'src/app/types/Post';
import { User } from 'src/app/types/User';
import { UserInitValues, postInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
@Input() postArticle: Post = postInitValues
@Input() user: User = UserInitValues
isOwner: boolean = false
isEditing: boolean = false
postEditData = {
  text: this.postArticle.text || ''
}

  constructor(private postServices: PostsService, private modalInteractions: ModalInteractionsService){

  }

  ngOnInit(): void {
    this.isOwner = this.user.pagesOwned.some(page => page.postsCreated.includes(this.postArticle)) || 
    this.user.createdPosts.some(post => post._id === this.postArticle._id)
  }

  onInitEdit(){
    this.isEditing ? this.isEditing = false : this.isEditing = true
  }

  onTextChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.postEditData.text = event.target.value
    }
    console.log(this.postEditData)
  }

  onEdit(event: MouseEvent){
    event.preventDefault()
    console.log(this.postEditData)
    this.postServices.editPost(this.postArticle._id, this.postEditData)
    this.onInitEdit()
  }

  onDelete(){
    this.postServices.postToDeleteSet = this.postArticle._id
    this.modalInteractions.onShowModal('delete-confirmation')
  }
}
