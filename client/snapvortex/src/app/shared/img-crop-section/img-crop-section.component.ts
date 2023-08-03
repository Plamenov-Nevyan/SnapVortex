import {Component , Input } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { ImgCropperData } from 'src/app/types/FileProps';
import { ImgCropperDataInitVals } from 'src/app/types/typesInitValues';
import { ProfileService } from 'src/app/features/profile.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { CreateService } from 'src/app/create-section/create.service';

@Component({
  selector: 'app-img-crop-section',
  templateUrl: './img-crop-section.component.html',
  styleUrls: ['./img-crop-section.component.css']
})
export class ImgCropSectionComponent {
  @Input() imgCropperData: ImgCropperData = ImgCropperDataInitVals
  croppedImagePreview: string | null | undefined = ''
  file: any = ''

  constructor(
    private profileServices: ProfileService, 
    private modalInteractions: ModalInteractionsService,
    private createServices: CreateService
    ) {
   
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

  closeCropper(){
    this.modalInteractions.onCloseModal()
  }

  updateProfilePicture(){
    if(this.imgCropperData.profileType === 'user'){
      this.profileServices.updateProfilePicture(this.file)
    }else if(this.imgCropperData.profileType === 'group'){
      this.createServices.updateGroupProfilePicture(this.file)
    }else if(this.imgCropperData.profileType === 'page'){
      this.createServices.updatePageProfilePicture(this.file)
    }
    this.modalInteractions.onCloseModal()
  }

  updateCoverPicture(){
    if(this.imgCropperData.profileType === 'user'){
      this.profileServices.updateCoverPicture(this.file)
    }else if(this.imgCropperData.profileType === 'group'){
      this.createServices.updateGroupCoverPicture(this.file)
    }else if(this.imgCropperData.profileType === 'page'){
      this.createServices.updatePageCoverPicture(this.file)
    }
    this.modalInteractions.onCloseModal()
  }

}
