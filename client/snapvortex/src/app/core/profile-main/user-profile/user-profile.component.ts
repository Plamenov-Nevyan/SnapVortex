import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  @Input() user: User = UserInitValues
  
  constructor(private modalInteraction: ModalInteractionsService) {

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
