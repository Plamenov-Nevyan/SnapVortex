import {Component , Input } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { ImgCropperData } from 'src/app/types/FileProps';
import { ImgCropperDataInitVals } from 'src/app/types/typesInitValues';
import { ProfileService } from 'src/app/features/profile.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-img-crop-section',
  templateUrl: './img-crop-section.component.html',
  styleUrls: ['./img-crop-section.component.css']
})
export class ImgCropSectionComponent {
  @Input() imgCropperData: ImgCropperData = ImgCropperDataInitVals
  croppedImagePreview: string | null | undefined = ''
  file: any = ''

  constructor(private profileServices: ProfileService, private modalInteractions: ModalInteractionsService) {
   
  }

  cropImg(event: ImageCroppedEvent){
    this.croppedImagePreview = event.objectUrl
    const uncroppedImage: File = this.imgCropperData.imgChangeEvent?.target.files[0]
    if(event.blob instanceof Blob){
      this.file = new File([event.blob], uncroppedImage.name,  {type: uncroppedImage.type})
    }
  }

  imgLoaded(){

  }

  initCropper(){

  }

  imgFailed(){

  }

  updateProfilePicture(){
    this.profileServices.updateProfilePicture(this.file)
    this.modalInteractions.onCloseModal()
  }

  closeCropper(){
    this.modalInteractions.onCloseModal()
  }
}
