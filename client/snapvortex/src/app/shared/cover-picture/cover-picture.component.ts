import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-cover-picture',
  templateUrl: './cover-picture.component.html',
  styleUrls: ['./cover-picture.component.css']
})
export class CoverPictureComponent {
  showOptions:boolean = false

  @Input() picture: string = ''
  
  constructor(private modalInteraction: ModalInteractionsService){

  }

  onShowHideOptions(){
    this.showOptions ? this.showOptions = false : this.showOptions = true
    console.log(this.showOptions)
  }

  onEdit(event: MouseEvent){
    event.preventDefault()
    this.modalInteraction.onShowModal('edit-profile')
    this.onShowHideOptions()
  }
}
