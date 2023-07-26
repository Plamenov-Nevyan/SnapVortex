import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalInteractionsService {
  private action:string = ''
  private showModalDialog: boolean = false
  private imgChangeEvent: any = ''
  private uploadFor: string = ''
  // private croppedImage

  get showModalGet(): boolean { return this.showModalDialog}
  set showModalSet(val:boolean){
    this.showModalDialog = val
  }

  get actionGet():string{return this.action}
  set actionSet(val:string){
    this.action = val
  }

  get imgChangeEventGet(): any {return this.imgChangeEvent}
  set imgChangeEventSet(val:any){
    this.imgChangeEvent = val
  }

  get uploadForGet(): any {return this.uploadFor}
  set uploadForSet(val:any){
    this.uploadFor = val
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

  onShowCropper(file: any, uploadFor: string){
    this.showModalSet = true
    this.actionSet = 'image-cropper'
    this.imgChangeEventSet = file
    this.uploadForSet = uploadFor
  }

}
