import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadedImage } from 'ngx-image-cropper';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent {
  @Input() picture: string = ''
  // imageChangedEvent: any = '';
  // croppedImage: any = '';
  
  constructor(
    private sanitizer: DomSanitizer,
    private modalInteractions: ModalInteractionsService
  ) {
  }

  onSelectImage(event: any){
      this.modalInteractions.onShowCropper(event, 'profilePicture')
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
