import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageCropperService {
  private croppedImageData: any = {
    image: '',
    uploadFor: ''
  }

  get croppedImageDataGet(){return this.croppedImageData}
  set croppedImageDataSet(val: any){this.croppedImageData = val}

  constructor() { }

  onSetCroppedImageData(croppedImg: any, uploadFor: string){
     this.croppedImageDataSet = {
      image: croppedImg,
      uploadFor
    }
     console.log(this.croppedImageData)
  }
}
