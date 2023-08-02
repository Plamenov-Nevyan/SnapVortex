import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-cover-picture',
  templateUrl: './cover-picture.component.html',
  styleUrls: ['./cover-picture.component.css']
})
export class CoverPictureComponent {
  showOptions:boolean = false

  @Input() picture: string = ''
  @Input() profileType: string = ''
  
  constructor(private modalInteraction: ModalInteractionsService, private sessionServices: SessionStorageService){

  }

  onShowHideOptions(){
    this.showOptions ? this.showOptions = false : this.showOptions = true
    console.log(this.showOptions)
  }

  onEdit(event: MouseEvent){
    event.preventDefault()
    if(this.profileType === 'user'){
      this.modalInteraction.onShowModal('edit-user-profile')
    }else if(this.profileType === 'group'){
      this.modalInteraction.onShowModal('edit-group-profile')
    }else {
      this.modalInteraction.onShowModal('edit-page-profile')
    }
    this.onShowHideOptions()
  }

  onUploadCoverPic(event: any){
    this.modalInteraction.onShowCropper({imgChangeEvent: event, uploadFor: 'coverPicture', id: this.sessionServices.getUserId()})
  }
}
