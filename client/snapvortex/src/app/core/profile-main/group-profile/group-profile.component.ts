import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Group } from 'src/app/types/Group';
import { User } from 'src/app/types/User';
import { UserInitValues, groupInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent {
 @Input() group: Group = groupInitValues
 @Input() user: User = UserInitValues
  constructor(private modalInteraction: ModalInteractionsService) {
    
  }
  onAddDescription(){
    this.modalInteraction.onShowModal('edit-group-description')
  }
}
