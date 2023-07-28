import { Injectable } from '@angular/core';
import { ImgCropperData } from './types/FileProps';
import { ImgCropperDataInitVals } from './types/typesInitValues';

@Injectable({
  providedIn: 'root'
})
export class ModalInteractionsService {
  private action:string = ''
  private showModalDialog: boolean = false
  private imgCropperData: ImgCropperData = ImgCropperDataInitVals
  // private croppedImage

  get showModalGet(): boolean { return this.showModalDialog}
  set showModalSet(val:boolean){
    this.showModalDialog = val
  }

  get actionGet():string{return this.action}
  set actionSet(val:string){
    this.action = val
  }

  get imgCropperDataGet(): ImgCropperData {return this.imgCropperData}
  set imgCropperDataSet(val: ImgCropperData){
    this.imgCropperData = {...val}
  }

  constructor() { }

  onCloseModal(){
    this.showModalSet = false
    this.actionSet = ''
  }

  onShowModal(action:string){
    this.showModalSet = true
    this.actionSet = action
  }

  onShowCropper(cropperData: ImgCropperData){
    this.showModalSet = true
    this.actionSet = 'image-cropper'
    this.imgCropperDataSet = cropperData
  }

}
