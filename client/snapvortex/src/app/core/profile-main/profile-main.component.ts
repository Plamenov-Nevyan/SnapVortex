import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  @Input() user: User = UserInitValues

  constructor(private modalInteraction: ModalInteractionsService){}
  
  onAddDescription(){
    this.modalInteraction.onShowModal('edit-description')
  }
  onAddAddress(){
    this.modalInteraction.onShowModal('edit-address')
  }
  onAddWorkplace(){
    this.modalInteraction.onShowModal('edit-workplace')
  }
  onAddWebsite(){
    this.modalInteraction.onShowModal('edit-personalWebsite')
  }
}
