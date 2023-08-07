import { Component, Input } from '@angular/core';
import { CreateService } from 'src/app/create-section/create.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent {
  @Input() profileType: string = ''
  @Input() picture: string = ''
  @Input() isOwner: boolean = false
  
  constructor(
    private modalInteraction: ModalInteractionsService,
    private sessionServices: SessionStorageService,
    private createServices: CreateService
  ) {
  }

  onSelectImage(event: any){
     if(this.profileType === 'user'){
      this.modalInteraction.onShowCropper({
        imgChangeEvent: event, 
        uploadFor: 'profilePicture', 
        id: this.sessionServices.getUserId(),
        profileType: 'user'
      })
     }else if(this.profileType === 'group'){
      this.modalInteraction.onShowCropper({
        imgChangeEvent: event, 
        uploadFor: 'profilePicture', 
        id: this.createServices.currentGroupDataGet._id,
        profileType: 'group'
      })
     }
  }
}
