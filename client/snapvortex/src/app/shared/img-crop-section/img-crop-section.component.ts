import {Component , Input } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { ImageCropperService } from 'src/app/image-cropper.service';

@Component({
  selector: 'app-img-crop-section',
  templateUrl: './img-crop-section.component.html',
  styleUrls: ['./img-crop-section.component.css']
})
export class ImgCropSectionComponent {
  @Input() imgChangeEvent: any = ''
  @Input() uploadFor: string = ''
  croppedImagePreview: string | null | undefined = ''
  file: any = ''

  constructor(private imageCropperService: ImageCropperService) {
   
  }

  cropImg(event: ImageCroppedEvent){
    this.croppedImagePreview = event.objectUrl
    const uncroppedImage: File = this.imgChangeEvent.target.files[0]
    if(event.blob instanceof Blob){
      this.file = new File([event.blob], uncroppedImage.name,  {type: uncroppedImage.type})
      this.imageCropperService.onSetCroppedImageData(this.file, this.uploadFor)
    }
  }

  imgLoaded(){

  }

  initCropper(){

  }

  imgFailed(){

  }

}
