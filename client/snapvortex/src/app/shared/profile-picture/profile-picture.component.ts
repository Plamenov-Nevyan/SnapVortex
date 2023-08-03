import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadedImage } from 'ngx-image-cropper';
import { ImageCroppedEvent } from 'ngx-image-cropper';
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
  // imageChangedEvent: any = '';
  // croppedImage: any = '';
  
  constructor(
    private sanitizer: DomSanitizer,
    private modalInteractions: ModalInteractionsService,
    private sessionServices: SessionStorageService,
    private createServices: CreateService
  ) {
  }

  onSelectImage(event: any){
     if(this.profileType === 'user'){
      this.modalInteractions.onShowCropper({
        imgChangeEvent: event, uploadFor: 'profilePicture', 
        id: this.sessionServices.getUserId(),
        profileType: 'user'
      })
     }else if(this.profileType === 'group'){
      this.modalInteractions.onShowCropper({
        imgChangeEvent: event, uploadFor: 'profilePicture', 
        id: this.createServices.currentGroupDataGet._id,
        profileType: 'group'
      })
     }
  }

  // fileChangeEvent(event: any): void {
  //     this.imageChangedEvent = event;
  // }
  // imageCropped(event: ImageCroppedEvent) {
  //   if(event instanceof String){
  //     this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
  //   }
  //   // event.blob can be used to upload the cropped image
  // }
  // imageLoaded(image: LoadedImage) {
  //     // show cropper
  // }
  // cropperReady() {
  //     // cropper ready
  // }
  // loadImageFailed() {
  //     // show message
  // }
  
}
