import { Component } from '@angular/core';
import { PostsService } from 'src/app/features/posts/posts.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  get postToDelete():string {return this.postsService.postToDeleteGet}

  constructor(private postsService: PostsService, private modalInteractions: ModalInteractionsService){

  }

  onConfirm(){
    this.postsService.deletePost(this.postToDelete)
    this.modalInteractions.onCloseModal()
  }

  onCancel(){
    this.modalInteractions.onCloseModal()
  }
}
