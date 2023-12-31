import { Component, Input } from '@angular/core';
import { CreateService } from 'src/app/create-section/create.service';
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
  @Input() isOwner: boolean = false
  
  constructor(
    private modalInteraction: ModalInteractionsService, 
    private sessionServices: SessionStorageService,
    private createServices: CreateService
    ){
      console.log(this.isOwner)
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
    }
    this.onShowHideOptions()
  }

  onUploadCoverPic(event: any){
    if(this.profileType === 'user'){
      this.modalInteraction.onShowCropper({
        imgChangeEvent: event, 
        uploadFor: 'coverPicture', 
        id: this.sessionServices.getUserId(),
        profileType: 'user'
      })
    }else if(this.profileType === 'group'){
      this.modalInteraction.onShowCropper({
        imgChangeEvent: event, 
        uploadFor: 'coverPicture', 
        id: this.createServices.currentGroupDataGet._id,
        profileType: 'group'
      })
    }
  }
}
